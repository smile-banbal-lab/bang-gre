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

// src/apis/QnaAPICalls.js
export const callGetqnaAPI = async (id) => {
    try {
        const response = await fetch(`/api/qna/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch qna:', error);
        return null;
    }
};