import { combineReducers } from "redux";
import categoryReducer from "./category/categoryReducer";
import loginReducer from "./login/loginReducer";
import productReducer from "./product/productReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  category: categoryReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
