import { combineReducers } from "redux";
import cartReducer from "./cart/cart.reducer";
import productsReducer from "./products/products.reducer";
import userReducer from "./user/user.reducer";

export default combineReducers({
  user: userReducer,
  cart: cartReducer,
  products: productsReducer,
});
