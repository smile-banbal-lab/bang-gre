import { createActions, handleActions } from "redux-actions";

/* 초기 state값 */
const initialState = {};

/* Action Types (User) */									// 타입 별 생성되는 액션 함수 이름(LARGE_SNAKE_CASE -> camelCase)
export const LOGIN = 'user/LOGIN';							// -> login()
export const RESET_LOGIN_USER = 'user/RESET_LOGIN_USER';	// -> resetLoginUser()
export const VERIFY = 'user/VERIFY';
export const MODIFY_USER_INFO = 'user/MODIFY_USER_INFO';

/* Action Functions (User) */
export const { user: { login, resetLoginUser, verify, modifyUserInfo } } = createActions({
	[LOGIN]: (res) => ({ res }),
	[RESET_LOGIN_USER]: (res = initialState) => ({ res }),
	[VERIFY]: (res) => ({ res }),
	[MODIFY_USER_INFO] : (res) => ({ modify: res })
});

/* Reducer (User) */
const userReducer = handleActions(
	{
		[LOGIN]: (state, { payload: { res } }) => {

			if (res) {
				/* localStorage에 로그인 상태 저장 */
				localStorage.setItem("isLogin", true);	// localStorage가 무엇인지는 검색해서 (가볍게)공부해보세요
			} else {
				res = { message: 'LOGIN_FAIL' };
			}

			console.log('[Login] res: ', res);
			return res;

		},
		[RESET_LOGIN_USER]: (state, { payload: { res } }) => {

			return res;

		},
		[VERIFY]: (state, { payload: {res}}) => {

			if (res) {
				localStorage.setItem("isVerify", true);
			} else {
				res = { message: 'VERIFY_FAIL'};
			}

			return res;
		},
		[MODIFY_USER_INFO]: (state, { payload }) => {

			return payload;
		}
	},
	initialState
);

export default userReducer;

