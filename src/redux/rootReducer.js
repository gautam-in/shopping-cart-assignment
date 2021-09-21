import { combineReducers } from "redux";
import categoryReducer from "./category/categoryReducer";
import loginReducer from "./login/loginReducer";
import productReducer from "./product/productReducer";

const rootReducer = combineReducers({
  login: loginReducer,
  category: categoryReducer,
  product: productReducer,
});

export default rootReducer;
