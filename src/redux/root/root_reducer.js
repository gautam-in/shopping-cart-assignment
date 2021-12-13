import { combineReducers } from "redux";
import { cartReducer } from "../cart_reducer/cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  // shop: shopReducer,
});

export default  rootReducer;
