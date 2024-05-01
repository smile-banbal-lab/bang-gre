// src/pages/QnaDetail.js
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getQna } from '../modules/QnaModule';
import { callGetqnaAPI } from '../apis/QnaAPICalls';
import './Qna.css'

function QnaDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const qnaDetail = useSelector(state => state.qnaReducer.qna);

    useEffect(() => {
        const fetchQnaDetail = async () => {
            try {
                const response = await callGetqnaAPI(id);
                if (response && response.data) {
                    dispatch(getQna(response.data));
                } else {
                    console.log('No data received from the API');
                }
            } catch (error) {
                console.error('Error fetching qna detail:', error);
            }
        };

        if (!qnaDetail || qnaDetail.id !== Number(id)) {
            fetchQnaDetail();
        }
    }, [id, qnaDetail, dispatch]);

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
