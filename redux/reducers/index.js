import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productsReducer from "./productsReducer";
import userReducer from "./userReducer";

export default combineReducers({
    cart:cartReducer,
    categories: productsReducer,
    user: userReducer
   
})