import React from 'react';
import { useSelector } from 'react-redux';
import CartList from '../lists/CartList';


function CartPage() {
    const cartItems = useSelector(state => state.cartReducer.cartItems);

    return (
        <div>
        <h2>장바구니</h2>
        <ul>
            {cartItems && cartItems.map(item => (
            <li key={item.id}>
                <div>
                <span>{item.name}</span>
                {/* <span>{item.price}원</span> */}
                <span>수량: {item.quantity}</span>
                </div>
                <div>
                <button>수량 변경</button>
                <button>삭제</button>
                </div>
            </li>
            ))}
        </ul>
        </div>
    );
    }

export default CartPage;
