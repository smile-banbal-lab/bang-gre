import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from './cartActionTypes';

export const addToCart = (menu) => {
    return (dispatch) => {
        // 비동기 작업을 수행한 후에 액션을 디스패치합니다.
        dispatch({
            type: 'ADD_TO_CART',
            payload: menu
            });
        };
    };

export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    payload: itemId
});

export const updateQuantity = (itemId, newQuantity) => ({
    type: UPDATE_QUANTITY,
    payload: { itemId, newQuantity }
});
