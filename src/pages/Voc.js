import React, { useEffect } from 'react';
import { callGetqnaListAPI } from '../apis/QnaAPICalls';
import { useSelector, useDispatch } from 'react-redux';

import CommonTable from '../components/table/CommonTable';
import CommonTableColumn from '../components/table/CommonTableColumn';
import CommonTableRow from '../components/table/CommonTableRow';

function Voc() {
    const { qna } = useSelector(state => state.menuReducer); // useSelector에서 바로 필요한 qna만 가져오도록 수정
    const dispatch = useDispatch();
    

    useEffect(() => {
        /* menuList 호출 API */
        dispatch(callGetqnaListAPI()); // API 호출 시 필요한 매개변수(id)가 빠졌습니다.
    }, [dispatch]);

    if (!qna) {
        return <div>Loading...</div>;
    }

    const items = Object.values(qna).map((item) => (
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