import { Link } from 'react-router-dom';
import { callDeleteCartAPI, callModifyCartAPI } from '../../apis/CartAPICalls';
import { getMenu } from '../../modules/MenuModule';
import { useDispatch, useSelector } from 'react-redux';
import { callGetMenuAPI } from '../../apis/MenuAPICalls';
import React, { useEffect, useState } from 'react';



function CartItem({ menu, prod }) {

	console.log("menu on CartItem is :", menu);

	const currentQuantity = menu.Quantity;
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(menu.Quantity);
	const [modifyCart, setModifyCart] = useState(
		{
			id: menu.id,
			Quantity: menu.Quantity,
			menuid: menu.menuid,
			userid: menu.userid,
			Confirm: menu.Confirm,
			date: menu.date,
			name: menu.name
		}
	);

	const [product, setProduct] = useState(
		{
			id: prod.id,
			name: prod.name,
			category: {
					type: prod.category.type,
					image: prod.category.image
				},
			flavor: [''],
			price: prod.price,
			Information: {
					Sodium: prod.Information.Sodium,
					Sugar: prod.Information.Sugar,
					Fat: prod.Information.Fat,
					TransFat: prod.Information.TransFat,
					Cholesterol: prod.Information.Cholesterol,
					protein: prod.Information.protein
				},
			image: prod.image
		}
	);

	const deleteOrderHandler = () => {
		dispatch(callDeleteCartAPI(menu.id));
		document.location.reload();
	};

	const onChangeHandler = (e) => {
		let value = e.target.value;
		let name = e.target.name;
		setModifyCart({
			...modifyCart,
			[name]: value
		});
	};

	const modifyQuantityHandler = () => {
		dispatch(callModifyCartAPI(modifyCart));
		document.location.reload();
	}

	// const decreaseQuantity = () => {
    //     if (quantity > 1) {
    //         setQuantity(prevQuantity => prevQuantity - 1);
    //     }
    // };

    // const increaseQuantity = () => {
    //     setQuantity(prevQuantity => prevQuantity + 1);
    // };




	return (
		<>
		
			<div className="cartItem">
				<h3>이름 : {menu.name}</h3>
				<h4>개당 금액: {product.price}<br></br>총 금액: {(product.price)*(modifyCart.Quantity)}</h4>
				<div>
					<label>수량: </label>
					<input type="number" name="Quantity" min="1" value={modifyCart.Quantity} onChange={onChangeHandler}></input>

				</div>
				<div>
					<h3>수량 : {menu.Quantity}</h3>
					<img src={product.image} style={{ maxWidth: 200 , maxHeight: 200}} alt={product.name}></img>
				</div>
				<button className='cart-delete-button' onClick={deleteOrderHandler}>Delete</button>
				<button className='cart-modify-quantity-button' onClick={modifyQuantityHandler}>Confirm</button>
			</div>
		</>
);
}

export default CartItem;