import { callDeleteCartAPI, callModifyCartAPI } from '../../apis/CartAPICalls';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';



function CartHistoryItem({ menu, prod, history }) {

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
					<div id="cart-card-footer" class="container">
						<h3>{menu.name}</h3>
						<h4>
							개당 금액: {product.price}
							<br></br>
							총 금액: {(product.price)*(menu.Quantity)}
						</h4>
					</div>
					<div>
						<h3>수량 : {menu.Quantity}</h3>
					</div>
                    <img src={product.image} style={{ maxWidth: 200 , maxHeight: 200}} alt={product.name}></img>
				</div>
                <br></br>
			</div>
		</>
);
}

export default CartHistoryItem;