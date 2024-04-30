import { combineReducers } from "redux";
import userReducer from "./UserModule";
import menuReducer from "./MenuModule";
import qnaReducer from "./QnaModule";

const rootReducer = combineReducers({
	userReducer,
	menuReducer,
	qnaReducer
});

export default rootReducer;