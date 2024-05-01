import { request } from "./Api";
import { getMenulist, getMenu, registMenu, modifyMenu, deleteMenu } from "../modules/MenuModule";
import { getCartlist, getCart, deleteCart, modifyCart, registCart } from "../modules/CartModule";


export function callGetCartListAPI() {
    console.log('getCartList api calls...');

    return async (dispatch, getState) => {
        const result = await request('GET', '/item');
        console.log('getCartList result : ', result);

        dispatch(getCartlist(result));
    }
}

export function callGetCartAPI(id) {
    console.log('getCart api calls...');

    return async (dispatch, getState) => {
        const result = await request('GET', `/item/${id}`);
        console.log('getMenu result : ', result);

        dispatch(getCart(result));
    }
}

export function callCheckCartAPI(menu) {
    console.log('checking if order entity exists for this order...');
    return async (dispatch, getState) => {
        const result = await request('GET', '/item');
        dispatch(getCartlist(result));
        for (let order in result) {
            if (order.userid == menu.userid && order.date == menu.date) {
                const orderCheck = true;
                console.log("It is a extra order");
                console.log("order_id: ", order.id);
                //register 함수
                break;
            } else {
                const orderCheck = false;
                console.log("It is a new order");
                //id 생성 후 register 함수
            }
        }
    }
}


export function callRegisterCartAPI(menu) {
    console.log('registCart api calls...');

    return async (dispatch, getState) => {
        const result = await request('POST', '/item/', menu);
        console.log('registCart result: ', result);

        dispatch(registCart(result));
    }
}

export function callModifyCartAPI(menu) {
    console.log('modifyMenu api calls...');
    return async (dispatch, getState) => {
        const result = await request('PUT', `/item/${menu.id}`, menu);
        console.log('modifyCart result: ', result);

        dispatch(modifyCart(result));
    }
}

export function callDeleteCartAPI(id) {

	console.log('deleteCart api calls...');

	return async (dispatch, getState) => {

		const result = await request('DELETE', `/item/${id}`);
		console.log('deleteCart result : ', result);

		dispatch(deleteCart(result));
	}
}



export function callAddToCartAPI(menu, userid) {
    console.log('callAddToCartAPI api calls...');

    return async (dispatch, getState) => {
        const today = new Date().toISOString().split('T')[0];
        let id = 1; 


        if (getState().cartReducer && Array.isArray(getState().cartReducer.items)) {
            id = getState().cartReducer.items.length + 1;
        }

        const newItem = {
            id: id.toString(),
            name: menu.name,
            date: today,
            userid: userid,
            Confirm: false,
            menuid: menu.id,
            Quantity: 1
        };

        try {
            const result = await request('POST', '/item', newItem);
            console.log('Added to cart:', result);
            dispatch(registCart(result));
        } catch (error) {
            alert('장바구니 추가 과정에서 에러 발생', error);
        }
    };
}