// 액션 타입 정의
const ADD_TO_CART = 'cart/ADD_TO_CART';
const REMOVE_FROM_CART = 'cart/REMOVE_FROM_CART';

// 액션 생성자 함수
export const addToCart = (item) => ({
    type: ADD_TO_CART,
    payload: item,
    });

    export const removeFromCart = (itemId) => ({
    type: REMOVE_FROM_CART,
    payload: itemId,
    });

    // 초기 상태
    const initialState = {
    items: [], // 장바구니에 담긴 상품 목록
    };

    // 리듀서
    const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
        return {
            ...state,
            items: [...state.items, action.payload],
        };
        case REMOVE_FROM_CART:
        return {
            ...state,
            items: state.items.filter(item => item.id !== action.payload),
        };
        default:
        return state;
    }
    };

export default cartReducer;
