import React, { useEffect } from 'react';
import { callGetqnaListAPI } from '../apis/QnaAPICalls';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

import CommonTable from '../components/table/CommonTable';
import CommonTableColumn from '../components/table/CommonTableColumn';
import CommonTableRow from '../components/table/CommonTableRow';
import '../components/table/CommonTable.css';

function Voc() {
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

	const items = Object.values(qnaList).map((item) => (
		<CommonTableRow key={item.id}>
			<CommonTableColumn>{item.id}</CommonTableColumn>
			<CommonTableColumn>{item.title}</CommonTableColumn>
			<CommonTableColumn>{item.date}</CommonTableColumn>
			<CommonTableColumn>{item.userid}</CommonTableColumn>
			<CommonTableColumn>{item.content}</CommonTableColumn>
		</CommonTableRow>
	));


	return (
		<>
			<div id='Voc-page'>
				<h2 >게시글 목록 {(isAuthorized) && 
                <button onClick={() => navigate(`/contact`)}>게시글 작성하기</button>} </h2>

				<CommonTable headersName={['글번호', '제목', '등록일', '작성자(id)', '내용']}>
					{items}
				</CommonTable>
			</div>
		</>
	);
}

export default Voc;