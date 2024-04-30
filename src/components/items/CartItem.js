import { Link } from 'react-router-dom';
import { addToCart } from '../../actions/cartActions';
import { getMenu } from '../../modules/MenuModule';
import { useDispatch, useSelector } from 'react-redux';
import { callGetMenuAPI } from '../../apis/MenuAPICalls';
import { useEffect } from 'react';

function CartItem({ menu }) {

	console.log("menu on CartItem is :", menu);
    // const result = useSelector(state => state.menuReducer);
	// console.log("result is: ", result);
    // const prod = result.prod;

	const dispatch = useDispatch();
	// const categoryType = menu.category ? menu.category.type : '';
    // const prodId = menu.id;
	// useEffect(
	// 	() => {
	// 		dispatch(callGetMenuAPI(prodId));
	// 		console.log("useEffect on CartItem.js executed");
	// 	},
	// 	[dispatch]
	// );
	// callGetMenuAPI(prodId);
	// console.log("prod is", prod);

	
    // const orderProd = dispatch(callGetMenuAPI(prodId));


	const addToCartHandler = () =>{
		dispatch(addToCart(menu)); 
		console.log('menu 확인', menu);
	};

	return (
		<>
		<Link to={`/menu/${menu.id}`}>
			<div className="cartItem">
				<h3>이름 : {menu.name}</h3>
				<h3>수량 : {menu.Quantity}</h3>
				{/* <h4>종류 : {prod.price}</h4>
				<img src={prod.image} style={{ maxWidth: 200 , maxHeight: 200}} alt={menu.name} /> */}
				<button className='menuItem-button' onClick={addToCartHandler}>Temp</button>
				
			</div>
		</Link>
			</>
);
}

export default CartItem;