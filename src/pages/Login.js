
import LoginForm from '../components/form/LoginForm';
import { Navigate } from 'react-router-dom';
import './Login.css';
import './Main.css';

function Login(){

	/* 로그인 상태인데 호출할 경우 메인으로 */
	const loginStatus = !!localStorage.getItem('isLogin');

	if(loginStatus) {
		return <Navigate to="/" replace={ true }/>
	}

	return (
		<section id="section01">
		<div>
			<h1>로그인</h1>
			<LoginForm/>
		</div>
		</section>
	);
}

export default Login;