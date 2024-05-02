import MenuList from "../components/lists/MenuList";
import CartList from "../components/lists/CartList";
import { useNavigate } from "react-router-dom";
import './Carts.css';                   

function Carts() {

	const isAuthorized = !!sessionStorage.getItem('isLogin');
	const navigate = useNavigate();

	return (
		<div id="carts">
			<div id="carts-footer" class="container">
				<h2>장바구니 {(isAuthorized) && <button id="order-history-button" onClick={() => navigate(`/menu/regist`)}>주문내역 보기</button>} </h2>
			</div>
			
			<CartList />
		</div>
	);
}

export default Carts;