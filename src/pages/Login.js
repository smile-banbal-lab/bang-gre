
import LoginForm from '../components/form/LoginForm';

import { Navigate } from 'react-router-dom';

import './Login.css';
import './Main.css';
/* 
- LoginForm: 이는 ../components/form/LoginForm 경로에서 가져온 컴포넌트로, 사용자에게 로그인 양식을 제공 
- { Navigate }: react-router-dom 라이브러리의 Navigate 컴포넌트를 사용하여 조건에 따라 사용자를 다른 경로로 리다이렉션함
*/

function Login(){

	/* 로그인 상태인데 호출할 경우 메인으로 */
	const loginStatus = !!sessionStorage.getItem('isLogin');


	if(loginStatus) {
		return <Navigate to="/" replace={ true }/>
	}

	return (
		<section id="section01">
		<div className='Main-background'></div>
		<div className="login-container">
			<h1>로그인</h1>
			<LoginForm/>
		</div>
		</section>
	);
}
/*
(1) loginStatus: 로컬
스토리지에서 'isLogin' 키의 값을 조회하여 존재하는지 확인함.
	!! 연산자를 사용하여 값을 불린 타입으로 강제 변환한다. 
	만일 값이 존재하면 true가 되어 로그인 상태임을 나타낸다.

(2) if (loginStatus): 만약 loginStatus가 true일 경우, 즉 사용자가 로그인 상태라면, 	
	<Navigate to="/" replace={ true }/>를 반환함. 
	이는 React Router의 Navigate 컴포넌트를 사용하여 사용자를 홈페이지(/)로 리다이렉션하는 동작을 한다. 
	replace={ true } 옵션은 현재 페이지를 새 위치로 교체하여 브라우저 히스토리에 현재 페이지를 남기지 않는다.

(3) return (...): 사용자가 로그인 상태가 아닐 경우, 로그인 페이지를 렌더링한다. 
	이 페이지는 <section> 태그 내에 <div>를 포함하며, 
	"로그인"이라는 제목과 LoginForm 컴포넌트를 표시한다. 
	LoginForm은 사용자가 로그인 정보를 입력할 수 있는 양식이다.

즉, 요약하면, 
1. 페이지를 방문한 사용자의 로그인 상태를 체크한다.
2. 만약 사용자가 이미 로그인되어 있다면, 메인 페이지로 리다이렉션한다.
3. 로그인되어 있지 않다면, 로그인 폼을 포함한 페이지를 보여준다.

*/

export default Login;