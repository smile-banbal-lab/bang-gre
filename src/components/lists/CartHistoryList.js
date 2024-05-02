import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import CartItem from '../items/CartItem';
import CartHistoryItem from '../items/CartHistroyItem';
import { callGetMenuListAPI } from "../../apis/MenuAPICalls";
import { callDeleteCartAPI, callGetCartListAPI, callModifyCartAPI } from '../../apis/CartAPICalls'; 
import "../commons/Commons.css"


function CartHistoryList() {
    let totalPrice = 0;

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
            Confirm: Boolean,
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
            if (menu.Confirm) {
                dispatch(callDeleteCartAPI(menu.id));        
            }
        });

        alert("주문내역 삭제 완료");
        document.location.reload();

    }

    return (
        cartList && menuList && (
            <>
                <div className="cartContainer">
                    
                    {/* 장바구니 목록을 표시합니다. */}
                    {cartList && cartList.map(cart => {
                        if ((cart.userid === userid)&&(cart.Confirm)) {
                            console.log("userid, id is : ", cart.userid, userid);
                            let menu = menuList.find(item => item.id === cart.menuid);
                            console.log("menu in CartList is: ", menu);
                            totalPrice += (menu.price)*(cart.Quantity);
                            return(
                                <div>
                                    <h4>주문날짜: {cart.date}</h4>
                                    <h4>주문번호: {cart.id.substr(0, 10)}</h4>
                                    <h4>주문항목번호: {cart.id}</h4>
                                    <div>
                                        <CartHistoryItem key={cart.id} menu={cart} prod={menu} history={true}>
                                        </CartHistoryItem>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
                <div className="order-confirm">
                    <br></br>
                    <h4>전체 주문금액: {totalPrice}</h4>
                    <button className='cart-history-delete-button' name="Confirm" onClick={onClickHandler}>주문내역 전체삭제</button>
                </div>
            </>
        )
    );
    
}

export default CartHistoryList;