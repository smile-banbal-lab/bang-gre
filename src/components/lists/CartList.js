import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import MenuItem from '../items/MenuItem';
import CartItem from '../items/CartItem';
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";
import { callGetCartListAPI } from '../../apis/CartAPICalls'; 
import { useLocation } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import "../commons/Commons.css"
import Menu from '../items/Menu';

function CartList() {

    const userInfoString = sessionStorage.getItem('userInfo');
	const userInfo = JSON.parse(userInfoString);
	console.log("user ID is : ", userInfo.userid);
    const userid = userInfo.userid;
    const cartResult = useSelector(state => state.cartReducer);
    const menuResult = useSelector(state => state.menuReducer);

    const cartList = cartResult.cartlist;
    const menuList = menuResult.menulist
	console.log('장바구니 리스트: ', cartList);
    console.log('장바구니 리스트 길이: ', cartList);
    console.log('메뉴 리스트 : ', menuList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(callGetCartListAPI());
        dispatch(callGetMenuListAPI());
    }, [dispatch]);

    return (
        cartList && menuList && (
            <>
                <div id="CartList">


                </div>
                <div className="cartBox">
                    {/* 장바구니 목록을 표시합니다. */}
                    {cartList && cartList.map(cart => {
                        if (cart.userid === userid) {
                            console.log("userid, id is : ", cart.userid, userid);
                            let menu = menuList.find(item => item.id === cart.menuid);
                            console.log("menu in CartList is: ", menu);
                            return(
                                <CartItem key={cart.id} menu={cart} prod={menu}>
                                </CartItem>
                            );
                        }
                    })}


                </div>
            </>
        )
    );
    
}

export default CartList;