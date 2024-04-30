import { combineReducers } from "redux";
import userReducer from "./UserModule";
import menuReducer from "./MenuModule";
import cartReducer from "./cartModule";

const rootReducer = combineReducers({
	userReducer,
	menuReducer,
	cartReducer
});

export default rootReducer;