import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  productList: productListReducer,
  categoryList: categoryListReducer,
  loginStatus: userReducer,
});

export default rootReducer;
