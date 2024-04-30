import React, { useEffect,useState } from 'react';
import { callGetqnaListAPI } from '../apis/QnaAPICalls';
import { useSelector, useDispatch } from 'react-redux';

import CommonTable from '../components/table/CommonTable';
import CommonTableColumn from '../components/table/CommonTableColumn';
import CommonTableRow from '../components/table/CommonTableRow';

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
}

export default Voc;