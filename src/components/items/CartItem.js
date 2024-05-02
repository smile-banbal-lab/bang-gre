import { callDeleteCartAPI, callModifyCartAPI } from '../../apis/CartAPICalls';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';



function CartItem({ menu, prod, history }) {

	console.log("menu on CartItem is :", menu);

	const currentQuantity = menu.Quantity;
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(menu.Quantity);
	const [modifyCart, setModifyCart] = useState(
		{
			id: menu.id,
			name: menu.name,
			date: menu.date,
			userid: menu.userid,
			Confirm: menu.Confirm,
			menuid: menu.menuid,
			Quantity: menu.Quantity
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

	const confirmItemChangeHandler = () => {
		let name = "Confirm";
		setModifyCart({
			...modifyCart,
			[name]: true
		});
	}
	const confirmItemHandler = () => {
		dispatch(callModifyCartAPI(modifyCart));
		document.location.reload();
	};

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
			<div className="cartItem container" id="CartItem">
				<br></br>
				<div className="cartBox">
					<div id="cart-card-footer" className="container">
						<h3>{menu.name}</h3>
						<h4>
							개당 금액: {product.price}
							<br></br>
							총 금액: {(product.price)*(menu.Quantity)}
						</h4>
					</div>
					<div>
						<label>변경 수량: </label>
						<input type="number" name="Quantity" min="1" value={modifyCart.Quantity} onChange={onChangeHandler}></input>
					</div>
					<div>
						<h3>수량 : {menu.Quantity}</h3>
						<h4>예상 총 금액: {(product.price)*(modifyCart.Quantity)}</h4>
					</div>
					<button className='cart-delete-button' onClick={deleteOrderHandler}>품목삭제</button>
					<button className='cart-modify-quantity-button' onClick={modifyQuantityHandler}>변경확정</button>
					{/* <button className='cart-confirm-button' onClick={confirmItemHandler} name="Confirm">주문확정</button> */}
					<select name="confirm" onChange={confirmItemChangeHandler} value={modifyCart.Confirm}>
						<option value="true">주문확정</option>
						<option value="false">장바구니 대기</option>
					</select>
				</div>
				<div className="cartBox">
					<img src={product.image} style={{ maxWidth: 200 , maxHeight: 200}} alt={product.name}></img>
				</div>
			</div>
		</>
);
}

export default CartItem;