import MenuList from "../components/lists/MenuList";
import CartList from "../components/lists/CartList";
import { useNavigate } from "react-router-dom";
import CartHistoryList from "../components/lists/CartHistoryList";
import './Carts.css';    
import { NavLink } from "react-router-dom";


function CartHistory() {

    const isAuthorized = !!sessionStorage.getItem('isLogin');
	const navigate = useNavigate();

	return (
		<div id="carts">
			<div id="carts-footer" className="container">
				<h2>장바구니 {(isAuthorized) && <button id="order-history-button" onClick={() => navigate(`/cart`)}>현재 장바구니 보기</button>} </h2>
			</div>
            <div>
                <h5>동일한 날짜의 동일한 시간에 주문하신 품목들은 일괄 배송되며, 같은 주문으로 간주됩니다. (예시: 5월 3일 9시15분에 주문한 품목들과 9시40분에 주문한 품목들은 같은 주문으로 간주)</h5>
                <br></br>
            </div>
			
			<CartHistoryList />
		</div>
	);

}

export default CartHistory;