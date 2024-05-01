import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { callGetCartListAPI } from '../../apis/CartAPICalls'; 


function CheckCart(menu) {
    const userInfoString = sessionStorage.getItem('userInfo');
	const userInfo = JSON.parse(userInfoString);
	console.log("user ID is : ", userInfo.userid);
    const userid = userInfo.userid;
    const cartResult = useSelector(state => state.cartReducer);
    const cartList = cartResult.cartlist;
	console.log('장바구니 리스트: ', cartList);
    console.log('장바구니 리스트 길이: ', cartList.length);
    const dispatch = useDispatch();

    useEffect(() => {
        /* cartList 호출 API */
        dispatch(callGetCartListAPI());
    }, [dispatch]);


}

export default CheckCart;