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
    // const location = useLocation();
    // const queryParams = new URLSearchParams(location.search);
    // const initialSearch = queryParams.get('search') || '';

    // const [searchInput, setSearchInput] = useState('');
    // const [selectedCategories, setSelectedCategories] = useState([]);
    // const [filteredCartList, setFilteredCartList] = useState([]);
    const { id } = useParams();
    


    const cartResult = useSelector(state => state.cartReducer);
    const menuResult = useSelector(state => state.menuReducer);
    // const userResult = useSelector(state => state.userReducer);
    // const [userInfo, setUserInfo] = useState(
    //     {
    //         id: userResult.id,
    //         name: userResult.name,
    //         phone: userResult.phone,
    //         email: userResult.email,
    //         address: userResult.address,
    //         userid: userResult.userid,
    //         password: userResult.password
    //     }
    // );


    const cartList = cartResult.cartlist;
    const menuList = menuResult.menulist
	console.log('장바구니 리스트: ', cartList);
    console.log('장바구니 리스트 길이: ', cartList.length);
    console.log('메뉴 리스트 : ', menuList);
    const dispatch = useDispatch();

    useEffect(() => {
        /* cartList 호출 API */
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
                    {cartList && cartList.map(cart => (
                        // if (cart.userid === id) {
                        //     console.log("userid, id is : ", cart.userid, id);
                            <CartItem key={cart.id} menu={cart}/>
                        // }
                    ))}


                </div>


                <div className="menuBox">
                    {/* Menu 목록을 표시합니다. */}
                    {/* {cartList && cartList.map(cart => (
                        <MenuItem key={cart.id} menu={cart}/>
                    ))} */}
                    {cartList && cartList.map(cart => {
                        const menu = menuList.find(item => item.id === cart.menuid);
                        return (
                            <div key={cart.id}>
                                {/* <MenuItem menu={cart} /> */}
                                {menu && <div>Price: {menu.price}<img src={menu.image} style={{ maxWidth: 200 , maxHeight: 200}} alt={menu.name}></img></div>}

                            </div>
                        );
                    })}


                </div>
            </>
        )
    );
    
}

export default CartList;