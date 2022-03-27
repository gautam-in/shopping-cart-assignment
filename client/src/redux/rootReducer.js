import { combineReducers } from "redux";
import * as bannerReducer from "../redux/Banners/banners.reducer";
import * as categoryReducer from "../redux/Categories/categories.reducer";
import * as productReducer from "../redux/Products/Products.reducer";
import * as cartReducer from "../redux/Cart/cart.reducer";

let rootReducer = combineReducers({
  banners: bannerReducer.reducer,
  categories: categoryReducer.reducer,
  products: productReducer.reducer,
  cartItems: cartReducer.reducer,
});

export default rootReducer;
