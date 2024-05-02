import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { callAddToCartAPI, callGetCartListAPI } from '../../apis/CartAPICalls';
import './Menu.css'




function MenuItem({ menu, categoryType }) {
	const dispatch = useDispatch();
	const addToCartHandler = () =>{
		if(!!sessionStorage.getItem('isLogin')) {
			const userInfoString = sessionStorage.getItem('userInfo');
			const userInfo = JSON.parse(userInfoString);
			console.log("user ID is : ", userInfo.userid);
			const userid = userInfo.userid;
			dispatch(callAddToCartAPI(menu, userid ));
			alert("장바구니 넣기 성공, 수량 변경은 나의 장바구니에서 부탁드립니다!");
		} else {
			alert("먼저 로그인 부탁드립니다.");
		}
	};
	// const cartResult = useSelector(state => state.cartReducer);
    // const cartList = cartResult.cartlist;
	// console.log('장바구니 리스트: ', cartList);
    // console.log('장바구니 리스트 길이: ', cartList.length);
	useEffect(() => {
        /* cartList 호출 API */
        dispatch(callGetCartListAPI());
    }, [dispatch]);



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