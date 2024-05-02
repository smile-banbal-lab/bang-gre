// src/redux/modules/QnaModule.js
import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = {
    qnalist: {},
    qna: {}
};

/* Action Types */
const GET_QNALIST = 'qna/GET_QNALIST';
const GET_QNA = 'qna/GET_QNA';
const REGIST_QNA = 'qna/REGIST_QNA';
const MODIFY_QNA = 'qna/MODIFY_QNA';
const DELETE_QNA = 'qna/DELETE_QNA';

/* Action Functions */
export const { qna: { getQnalist, getQna, registQna, modifyQna, deleteQna } } = createActions({
    [GET_QNALIST]: (res) => ({ qnalist: res }),
    [GET_QNA]: (res) => ({ qna: res }),
    [REGIST_QNA]: (res) => ({ regist: res }),
    [MODIFY_QNA]: (res) => ({ modify: res }),
    [DELETE_QNA]: (res) => ({ delete: res }),
});

/* Reducer */
const qnaReducer = handleActions(
    {
        [GET_QNALIST]: (state, { payload }) => ({ ...state, qnalist: payload.qnalist }),
        [GET_QNA]: (state, { payload }) => ({ ...state, qna: payload.qna }),
        [REGIST_QNA]: (state, { payload }) => ({ ...state, regist: payload.regist }),
        [MODIFY_QNA]: (state, { payload }) => ({ ...state, modify: payload.modify }),
        [DELETE_QNA]: (state, { payload }) => ({ ...state, delete: payload.delete })
    },
    initialState
);

export default qnaReducer;
