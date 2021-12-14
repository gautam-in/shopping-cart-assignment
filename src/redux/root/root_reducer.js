import { combineReducers } from "redux";
import { cartReducer } from "../cart_reducer/cartReducer";
import { categoryReducer } from "../category/categoryReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  category: categoryReducer,
});

export default  rootReducer;
