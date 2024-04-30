
import { Navigate } from 'react-router-dom';
import MenuRegistForm from '../components/form/MenuRegistForm';
import './Menus.css';

function MenuRegist() {

	/* 로그인 상태가 아닌데 호출할 경우 메인으로 */
	const isAuthorized = !!sessionStorage.getItem('isLogin');

	if (!isAuthorized) {
		return <Navigate to="/login" replace={true} />
	}

	return (
		<div id='Menus-regist-page'>
			<h2 >메뉴 등록 페이지</h2>
			<MenuRegistForm />
		</div>
	);
}

export default MenuRegist;