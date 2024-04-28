import { createActions, handleActions } from "redux-actions";

/*
 ** Redux와 redux-actions 라이브러리를 사용하여 사용자 인증과 관련된 상태 관리를 구현한다
 ** Redux는 JavaScript 애플리케이션의 상태 관리를 위한 라이브러리이며, 
 	redux-actions는 Redux를 더 편리하게 사용할 수 있도록 도와주는 도구입니다. 코드는 크게 액션 타입, 액션 생성 함수, 그리고 리듀서로 구성되어 있습니다.
 **	사용자 로그인, 로그인 상태 리셋, 사용자 검증, 사용자 정보 수정과 같은 기능을 관리하는 Redux 리듀서와 액션 생성 함수를 설정합니다. redux-actions 라이브러리를 사용하여 액션 생성과 리듀서 로직을 간소화하고, 상태 변화에 따른 부수 효과(예: localStorage에 상태 저장)를 관리합니다.

*/

/* 초기 state값: 빈 객체로 설정되어있음. 이 상태는 리듀서의 기본값으로 사용됨 */
const initialState = {};

/* 액션 타입: Action Types (User) */									// 타입 별 생성되는 액션 함수 이름(LARGE_SNAKE_CASE -> camelCase)
export const LOGIN = 'user/LOGIN';							// -> login()
export const RESET_LOGIN_USER = 'user/RESET_LOGIN_USER';	// -> resetLoginUser()
export const VERIFY = 'user/VERIFY';
export const MODIFY_USER_INFO = 'user/MODIFY_USER_INFO';
export const SIGN_OUT_USER = 'user/SiGN_OUT_USER';

// 각 액션 타입은 Redux에서 사용될 각 액션의 고유 이름을 정의합니다. 이 이름들은 액션 생성 함수를 호출할 때 사용됩니다.


/* 액션 생성 함수: Action Functions (User) */
export const { user: { login, resetLoginUser, verify, modifyUserInfo, signOutUser } } = createActions({
	[LOGIN]: (res) => ({ res }),
	[RESET_LOGIN_USER]: (res = initialState) => ({ res }),
	[VERIFY]: (res) => ({ res }),
	[MODIFY_USER_INFO] : (res) => ({ modify: res }),
	[SIGN_OUT_USER] : (res) => ({ delete: res })
});
// createActions 함수는 주어진 액션 타입에 대한 액션 생성 함수를 자동으로 생성합니다.
// 각 함수는 받은 인자를 액션의 payload로 설정합니다. 예를 들어, login(res) 함수는 { type: LOGIN, payload: { res } }와 같은 액션 객체를 반환합니다.
// RESET_LOGIN_USER의 경우 기본값으로 initialState를 사용할 수 있도록 설정되어 있습니다.

/* 리듀서: Reducer (User) */
const userReducer = handleActions(
	{
		[LOGIN]: (state, { payload: { res } }) => {

			if (res) {
				/* localStorage에 로그인 상태 저장 */
				sessionStorage.setItem("isLogin", true);	// localStorage가 무엇인지는 검색해서 (가볍게)공부해보세요
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
				sessionStorage.setItem("isVerify", true);
			} else {
				res = { message: 'VERIFY_FAIL'};
			}

			return res;
		},
		[MODIFY_USER_INFO]: (state, { payload }) => {

			return payload;
		},
		[SIGN_OUT_USER] : (state, { payload }) => {

			return payload;

		}
		
	},
	initialState
);
// handleActions 함수는 액션 타입에 따라 상태를 어떻게 변경할지 정의합니다. 이 함수는 각 액션 타입에 매칭되는 리듀서 함수를 객체로 받습니다.
// 각 리듀서 함수는 현재 상태와 액션 객체를 매개변수로 받아 새 상태를 반환합니다.
// LOGIN 액션에서는 로그인 성공 시 localStorage에 로그인 상태를 저장하고, 실패 시 메시지를 로그합니다.
// VERIFY 액션에서도 비슷하게 검증 성공 시 localStorage에 검증 상태를 저장합니다.
// MODIFY_USER_INFO 액션에서는 받은 payload로 상태를 업데이트합니다.


export default userReducer;

