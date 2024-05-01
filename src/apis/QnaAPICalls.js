import { request } from "./Api";
import { getQnalist, getQna, registQna, modifyQna, deleteQna } from "../modules/QnaModule";

export function callGetqnaListAPI () {
	console.log('callGetqnaListAPI...');
	return async (dispatch, getState) => {
		
		const result = await request('GET', '/qna');
		console.log('getqnaList result: ' , result);

		dispatch(getQnalist(result));
	}
};

export function callDeleteqnaAPI (id) {
    console.log('callDeleteqnaAPI...');
    return async (dispatch, getState) => {

        const result = await request('DELETE', `/qna/${id}`);

        dispatch(deleteQna(result));
    }
}

// src/apis/QnaAPICalls.js
export function callGetqnaAPI (id) {
    
    return async (dispatch, getState) => {
        try {
            const result = await request('GET', `/qna/${id}`);
            console.log(result);

            dispatch(getQna(result));
        }

        catch (error) {
            console.error('Failed to fetch qna:', error);
        }
    }
};


// export const callGetqnaAPI = async (id) => {
//     try {
//         const response = await fetch(`/api/qna/${id}`);
//         console.log(response);
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
//         return await response.json();
//     } catch (error) {
//         console.error('Failed to fetch qna:', error);
//         return null;
//     }
// };