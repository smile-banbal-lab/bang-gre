// src/pages/QnaDetail.js
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { callGetqnaAPI, callDeleteqnaAPI } from '../apis/QnaAPICalls';
import './Qna.css'

function QnaDetail() {

    const userString = sessionStorage.getItem('userInfo');
	const user = JSON.parse(userString);

    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const qnaDetail = useSelector(state => state.qnaReducer.qna);

    useEffect(() => {

        // dispatch(callGetqnaAPI(id));
        const fetchQnaDetail = async () => {
            try {
                const response = callGetqnaAPI(id);
                if (response) {
                    dispatch(response);
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

    const onClickHandler = () => {

        try {
            const response = callDeleteqnaAPI(id);
            if (response) {
                dispatch(response);
            } else {
                console.log('No data received from the API');
            }
        } catch (error) {
            console.error('Error fetching qna detail:', error);
        }

        alert('글 삭제 성공');

        navigate('/qna');
    }

    return (
        <>
            <div className="Main-background">
                        </div>
                <div className='qna-container'>
                    <div className="qna-detail ">
                        <h2 className="qna-title">{qnaDetail.title}</h2>
                        <p>작성일: {qnaDetail.date}</p>
                        <p>작성자: {qnaDetail.userid}</p>
                        <p>내용: {qnaDetail.content}</p>
                        <br/>
                        { user && user.id != null && (user.userid === qnaDetail.userid || user.isAdmin) && (
                        <button onClick={onClickHandler}>글 삭제</button>
                        )}
                    </div>
                </div>
        </>
    );
}

export default QnaDetail;
