import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CartItem from '../items/CartItem';
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";
import { callDeleteCartAPI, callGetCartListAPI, callModifyCartAPI } from '../../apis/CartAPICalls'; 
import "../commons/Commons.css"


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

    const [confirmCart, setConfirmCart] = useState(
        {
            id: '',
            name: '',
            date: '',
            userid: '',
            Confirm: false,
            menuid: '',
            Quantity: ''
        }
    );


    const onClickHandler = () => {
        console.log("설마");


        cartList.map(menu => {
            // if ((menu.userid === userid)&&(menu.Confirm === false)) {
            //     console.log("onClickHandler -> if is wroking");

            //     setConfirmCart({
            //             id: menu.id,
            //             name: menu.name,
            //             date: menu.date,
            //             userid: menu.userid,
            //             Confirm: true,
            //             menuid: menu.menuid,
            //             Quantity: menu.Quantity
            //     });
            //     dispatch(callModifyCartAPI(confirmCart));
            // }
            dispatch(callDeleteCartAPI(menu.id));        

        });

        alert("주문완료, 따라서 텅~!");
        document.location.reload();

    }

    return (
        cartList && menuList && (
            <>
                <div className="cartContainer">
                    
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
                <div className="order-confirm">
                    <br></br>
                    <button className='cart-order-confirm-button' name="Confirm" onClick={onClickHandler}>장바구니 주문</button>
                </div>
            </>
        )
    );
    
}

export default CartList;