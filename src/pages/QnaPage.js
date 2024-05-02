import React, { useEffect } from 'react';
import { callGetqnaListAPI } from '../apis/QnaAPICalls';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import '../components/table/CommonTable.css';

function QnaPage() {
    const result = useSelector(state => state.qnaReducer);
    const qnaList = result.qnalist;
    const dispatch = useDispatch();
    const isAuthorized = !!sessionStorage.getItem('isLogin');
    const navigate = useNavigate();

    useEffect(() => {
        /* qnaList 호출 API */
        dispatch(callGetqnaListAPI());
    }, [dispatch]);

    if (!qnaList) {
        return <div>Loading...</div>;
    }

    const handleRowClick = (id) => {
        navigate(`/qna/${id}`); // 클릭한 게시글의 id에 해당하는 디테일 페이지로 이동
    };

    const items = Object.values(qnaList).map((item) => (
        <tr key={item.id} onClick={() => handleRowClick(item.id)}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.date}</td>
            <td>{item.userid}</td>
            <td>{item.content}</td>
        </tr>
    ));

    return (
        <div id='Voc-page'>
            <div className='Main-background qna-background'></div>
            <h2 className='qnaTitle'>게시글 목록 {(isAuthorized) && 
                <button onClick={() => navigate(`/contact`)}>게시글 작성하기</button>}</h2>
            <table className="qna-table">
                <colgroup>
                    <col style={{width: '8%'}}/>
                    <col style={{width: '20%'}}/>
                    <col style={{width: '15%'}}/>
                    <col style={{width: '20%'}}/>
                    <col style={{width: '37%'}}/>
                </colgroup>
                <thead>
                    <tr>
                        <th>글번호</th>
                        <th>제목</th>
                        <th>등록일</th>
                        <th>작성자(id)</th>
                        <th>내용</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        </div>
    );
}

export default QnaPage;
