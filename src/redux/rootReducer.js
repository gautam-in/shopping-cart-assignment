import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import fetchReducer from "./fetchData/fetch.reducer";
import productsReducer from "./products/products.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
  apiData: fetchReducer,
});