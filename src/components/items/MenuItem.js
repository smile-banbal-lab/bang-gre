import { Link } from 'react-router-dom';
import { addToCart } from '../../actions/cartActions';
import { useDispatch } from 'react-redux';

function MenuItem({ menu }) {
	const dispatch = useDispatch();

	const addToCartHandler = () =>{
		dispatch(addToCart(menu)); 
		console.log('menu 확인', menu)
	};

	return (
		<>
		<Link to={`/menu/${menu.id}`}>
			<div className="menuItem">
				<h3>이름 : {menu.name}</h3>
				<h3>가격 : {menu.price}</h3>
				<h4>종류 : {menu.category.type}</h4>
				<img src={menu.image} style={{ maxWidth: 200 , maxHeight: 200}} alt={menu.name} />
			</div>
		</Link>
				<button onClick={addToCartHandler}>장바구니 넣기</button>
			</>
);
}

export default MenuItem;