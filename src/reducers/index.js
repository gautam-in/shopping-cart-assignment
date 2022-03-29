import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  productList: productListReducer,
  categoryList: categoryListReducer,
});

export default rootReducer;
