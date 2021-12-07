import { combineReducers } from "redux";
import category from "redux/modules/category";
import banners from "redux/modules/banners";
import products from "redux/modules/products";

const rootReducer = combineReducers({
  category,
  banners,
  products,
});
export default rootReducer;
