import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { callAddToCartAPI } from '../../apis/CartAPICalls';




function MenuItem({ menu, categoryType, userid }) {
	const dispatch = useDispatch();
	// const userInfoString = sessionStorage.getItem('userInfo');
	// const userInfo = JSON.parse(userInfoString);
	// console.log("user ID is : ", userInfo.userid);
    // const userid = userInfo.userid;

	const addToCartHandler = () =>{
		dispatch(callAddToCartAPI(menu, userid ));
		alert("장바구니 넣기 성공, 수량 변경은 나의 장바구니에서 부탁드립니다!");
	};


	return (
		<>
		<Link to={`/menu/${menu.id}`}>
			<div className="menuItem">
                <div   div>				
                    <h3>이름 : {menu.name}</h3>
                    <h3>가격 : {menu.price}</h3>
                    {categoryType && <h4>종류 : {categoryType}</h4>}
                </div>

				<img src={menu.image} style={{ maxWidth: 200 , maxHeight: 200}} alt={menu.name} />
				<button className='menuItem-button' onClick={addToCartHandler}>장바구니 넣기</button>
			</div>
		</Link>
			</>
);
}

export default MenuItem;