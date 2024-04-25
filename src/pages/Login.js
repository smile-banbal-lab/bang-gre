
import LoginForm from '../components/form/LoginForm';
import { Navigate } from 'react-router-dom';
import './Login.css'

function Login(){

	/* 로그인 상태인데 호출할 경우 메인으로 */
	const loginStatus = !!localStorage.getItem('isLogin');

	if(loginStatus) {
		return <Navigate to="/" replace={ true }/>
	}

	return (
		<div className="login-container">
			<h1>로그인 페이지</h1>
			<LoginForm/>
		</div>
	);
}

export default Login;