import React, { useEffect, useState } from 'react';
import { callGetqnaAPI } from '../apis/QnaAPICalls';

function QnaDetail({ id }) {
    const [qnaDetail, setQnaDetail] = useState(null);

    useEffect(() => {
        // 게시글의 자세한 내용을 불러오는 API 호출
        callGetqnaAPI(id)
            .then(response => {
                setQnaDetail(response.data); // API 응답으로 받은 자세한 내용 설정
            })
            .catch(error => {
                console.error('Error fetching qna detail:', error);
            });
    }, [id]); // id가 변경될 때마다 호출

    if (!qnaDetail) {
        return <div>Loading...</div>;
    }

    return (
        <div className="qna-detail">
            <h2>{qnaDetail.title}</h2>
            <p>작성일: {qnaDetail.date}</p>
            <p>작성자: {qnaDetail.userid}</p>
            <p>내용: {qnaDetail.content}</p>
        </div>
    );
}

export default QnaDetail;
