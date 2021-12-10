import { combineReducers } from "redux";
import category from "redux/modules/category";
import banners from "redux/modules/banners";
import products from "redux/modules/products";
import cart from "redux/modules/cart";
import user from "redux/modules/user";

const rootReducer = combineReducers({
  category,
  banners,
  products,
  cart,
  user,
});

export default rootReducer;
