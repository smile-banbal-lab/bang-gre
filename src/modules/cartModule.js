import { createActions, handleActions } from "redux-actions";

// 액션 타입 정의
const REGIST_CART = 'cart/REGIST_CART';
const DELETE_CART = 'cart/DELETE_CART';
const GET_CARTLIST = 'cart/GET_CARTLIST';
const MODIFY_CART = 'cart/MODIFY_CART';
const GET_CART = 'cart/GET_CART';


export const { cart: { getCartlist, getCart, registCart, modifyCart, deleteCart } } = createActions({
	[GET_CARTLIST]: (res) => ({ cartlist: res }),
	[GET_CART]: (res) => ({ cart: res }),
	[REGIST_CART]: (res) => ({ regist: res }),
	[MODIFY_CART]: (res) => ({ modify: res }),
	[DELETE_CART]: (res) => ({ delete: res }),
});

// 액션 생성자 함수
    // 초기 상태
    const initialState = {
    items: [], // 장바구니에 담긴 상품 목록
    };

    // 리듀서
    const cartReducer = handleActions(
        {
            [GET_CARTLIST]: (state, { payload }) => {
                return payload;
            },
            [GET_CART]: (state, { payload }) => {
                return payload;
            },
            [REGIST_CART]: (state, { payload }) => {
                return payload;
            },
            [MODIFY_CART]: (state, { payload }) => {
                return payload;
            },
            [DELETE_CART]: (state, { payload }) => {
                return payload;
            }
        },
        initialState
    );

export default cartReducer;
