import { combineReducers } from "redux";
import userReducer from "./UserModule";
import menuReducer from "./MenuModule";
import cartReducer from "./CartModule";
import qnaReducer from "./QnaModule";

const rootReducer = combineReducers({
	userReducer,
	menuReducer,
	cartReducer,
	qnaReducer
});

export default rootReducer;