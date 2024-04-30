import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = {};

/* Action Types (qna) */						// 타입 별 생성되는 액션 함수 이름(LARGE_SNAKE_CASE -> camelCase)
const GET_QNALIST = 'qna/GET_QNALIST';		// -> getQnalist()
const GET_QNA = 'qna/GET_QNA';				// -> getQna()
const REGIST_QNA = 'qna/REGIST_QNA';			// -> registQna()
const MODIFY_QNA = 'qna/MODIFY_QNA';			// -> modifyQna()
const DELETE_QNA = 'qna/DELETE_QNA';			// -> deleteQna()

/* Action Functions (Menu) */
export const { qna: { getQnalist, getQna, registQna, modifyQna, deleteQna } } = createActions({
	[GET_QNALIST]: (res) => ({ qnalist: res }),
	[GET_QNA]: (res) => ({ qna: res }),
	[REGIST_QNA]: (res) => ({ regist: res }),
	[MODIFY_QNA]: (res) => ({ modify: res }),
	[DELETE_QNA]: (res) => ({ delete: res }),
});

/* Reducer (Menu) */
const qnaReducer = handleActions(
	{
		[GET_QNALIST]: (state, { payload }) => {
			return payload;
		},
		[GET_QNA]: (state, { payload }) => {
			return payload;
		},
		[REGIST_QNA]: (state, { payload }) => {
			return payload;
		},
		[MODIFY_QNA]: (state, { payload }) => {
			return payload;
		},
		[DELETE_QNA]: (state, { payload }) => {
			return payload;
		}
	},
	initialState
);

export default qnaReducer;

