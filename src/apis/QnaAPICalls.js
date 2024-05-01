import { request } from "./Api";
import { getQnalist, getQna, registQna, modifyQna, deleteQna } from "../modules/QnaModule";

export function callGetqnaListAPI () {
	console.log('callGetqnaListAPI...');
	return async (dispatch, getState) => {
		
		const result = await request('GET', '/qna');
		console.log('getqnaList result: ' , result);

		dispatch(getQnalist(result));
	}
}

export function callGetqnaAPI(id) {
    console.log('callGetqnaAPI...');
    return async (dispatch, getState) => {
        const result = await request('GET', `/qna/${id}`);
        console.log('getqna result: ', result);
        dispatch(getQna(result));
    };
}