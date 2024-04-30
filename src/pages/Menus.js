import MenuList from "../components/lists/MenuList";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function Menus() {

	const isAuthorized = !!sessionStorage.getItem('isLogin');
	const navigate = useNavigate();
	const { state } = useLocation();
	const categoryType = state ? state.categoryType || '' : '';

	console.log('[Menus] state: ', state);
	console.log('[Menus] categoryCode : ', categoryType);

	return (
		<div>
			<h1>메뉴 목록 {(isAuthorized) && <button onClick={() => navigate(`/menu/regist`)}>메뉴 추가</button>} </h1>
			<MenuList categoryType={categoryType}/>
		</div>
	);
}

export default Menus;