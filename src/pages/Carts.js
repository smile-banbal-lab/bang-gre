import MenuList from "../components/lists/MenuList";
import CartList from "../components/lists/CartList";
import { useNavigate } from "react-router-dom";

function Carts() {

	const isAuthorized = !!sessionStorage.getItem('isLogin');
	const navigate = useNavigate();

	return (
		<div>
			<h1>장바구니 {(isAuthorized) && <button onClick={() => navigate(`/menu/regist`)}>주문내역 보기</button>} </h1>
			<CartList />
		</div>
	);
}

export default Carts;