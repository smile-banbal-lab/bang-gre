import { request } from "./Api";
import { login } from "../modules/UserModule";
import { verify } from "../modules/UserModule";
import { modifyUserInfo } from "../modules/UserModule";
/* 
 -> Redux-Thunk 미들 웨어를 사용하여 비동기 API 호출을 처리하고, 결과를 Redux 스토어에 반영
 -> 각 함수는 사용자 정보 검증, 로그인 처리, 정보 수정 등의 기능을 수행하며, 성공적인 처리 결과를 Rudux 스토어에 디스패치하여 애플리케이션의 상태를 업데이트
*/


/* callLoginAPI 함수: 로그인 정보 전달 받는 함수 */
// 목적: 사용자 로그인 정보 (loginInfo 객체)를 받아 서버에서 사용자 목록을 조회하고, 그 중 일치하는 사용자 정보를 찾아 로그인 처리를 합니다.
// 비동기 처리: request('GET', '/user')를 통해 서버로부터 사용자 목록을 가져옵니다.
// 사용자 검증: userList.find 메서드를 사용하여 loginInfo에 제공된 userid와 password가 일치하는 사용자를 찾습니다.
// 디스패치: 일치하는 사용자 정보(result)가 있으면, login 액션 생성 함수를 호출하여 Redux 스토어의 상태를 업데이트합니다.ㅋ
export function callLoginAPI(loginInfo) {

	console.log('login api calls...');

	/* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
	return async (dispatch, getState) => {

		/* Api의 axios 처리 참조  */
		const userList = await request('GET', '/user');

		/* id와 password 일치 여부 확인 - 서버에서 이루어져야 하는 로직 */
		/* 배열의 find 메소드 : 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환 */
		const result = await userList.find(user => user.userid === loginInfo.userid && user.password === loginInfo.password);

		console.log('login result : ', result);     // 해당 user 객체 반환

		/* action 생성 함수에 결과 전달하며 dispatch 호출 */
		dispatch(login(result));

	}
}


/* callModifyUserInfoAPI 함수 */
// 목적: 사용자 정보(userInfo 객체)를 업데이트하기 위해 서버에 PUT 요청을 보냅니다.
// 비동기 처리: request('PUT', /user/${userInfo.id}, userInfo)를 사용하여, 서버에 해당 사용자의 정보를 업데이트합니다.
// 디스패치: 업데이트 성공 시, modifyUserInfo 액션 생성 함수를 호출하여 Redux 스토어의 상태를 업데이트합니다.
export function callVerifyAPI(password) {

	console.log('verify api calls...');

	/* redux-thunk(미들 웨어)를 이용한 비동기 처리 */
	return async (dispatch, getState) => {

		/* Api의 axios 처리 참조  */
		const userList = await request('GET', '/user');

		/* password 일치 여부 확인 - 서버에서 이루어져야 하는 로직 */
		/* 배열의 find 메소드 : 메서드는 주어진 판별 함수를 만족하는 첫 번째 요소의 값을 반환 */
		const result = await userList.find(user => user.password === password);

		console.log('login result : ', result);     // 해당 user 객체 반환

		/* action 생성 함수에 결과 전달하며 dispatch 호출 */
		dispatch(verify(result));

	}
}


export function callModifyUserInfoAPI(userInfo) {

	console.log('modifyUserInfo api calls...');

	return async (dispatch, getState) => {

		const result = await request('PUT', `/user/${userInfo.id}`, userInfo);
		console.log('modifyUserInfo result : ', result);

		dispatch(modifyUserInfo(result));
	}
}