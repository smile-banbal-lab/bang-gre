<<<<<<< HEAD
import React, { useEffect,useState } from 'react';
=======
import React, { useEffect } from 'react';
>>>>>>> bang_gre/master
import { callGetqnaListAPI } from '../apis/QnaAPICalls';
import { useSelector, useDispatch } from 'react-redux';

import CommonTable from '../components/table/CommonTable';
import CommonTableColumn from '../components/table/CommonTableColumn';
import CommonTableRow from '../components/table/CommonTableRow';
<<<<<<< HEAD

function Voc() {
    const result = useSelector(state => state.qnaReducer);
    const qnaList = result.qnalist;
    const dispatch = useDispatch();
    

    useEffect(() => {
        /* qnaList 호출 API */
        dispatch(callGetqnaListAPI());
    }, [dispatch]);

    if (!qnaList) {
        return <div>Loading...</div>;
    }

    const items = Object.values(qnaList).map((item) => (
        <CommonTableRow key={item.id}>
            <CommonTableColumn>{item.id}</CommonTableColumn>
            <CommonTableColumn>{item.title}</CommonTableColumn>
            <CommonTableColumn>{item.date}</CommonTableColumn>
            <CommonTableColumn>{item.user_id}</CommonTableColumn>
        </CommonTableRow>
    ));

    return (
        <CommonTable headersName={['글번호', '제목', '등록일', '작성자']}>
            {items}
        </CommonTable>
    );
=======
import '../components/table/CommonTable.css';

function Voc() {
	const result = useSelector(state => state.qnaReducer);
	const qnaList = result.qnalist;
	const dispatch = useDispatch();


	useEffect(() => {
		/* qnaList 호출 API */
		dispatch(callGetqnaListAPI());
	}, [dispatch]);

	if (!qnaList) {
		return <div>Loading...</div>;
	}

	const items = Object.values(qnaList).map((item) => (
		<CommonTableRow key={item.id}>
			<CommonTableColumn>{item.id}</CommonTableColumn>
			<CommonTableColumn>{item.title}</CommonTableColumn>
			<CommonTableColumn>{item.date}</CommonTableColumn>
			<CommonTableColumn>{item.user_id}</CommonTableColumn>
			<CommonTableColumn>{item.content}</CommonTableColumn>
		</CommonTableRow>
	));

	const inputBoardHandler = () => {

	}

	return (
		<>
			<div id='Voc-page'>
				<h2 >게시글 목록</h2>
				<CommonTable headersName={['글번호', '제목', '등록일', '작성자', '내용']}>
					{items}
				</CommonTable>
				<button onClick={inputBoardHandler}>게시글 작성하기</button>
			</div>
		</>
	);
>>>>>>> bang_gre/master
}

export default Voc;