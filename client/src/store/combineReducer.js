import { combineReducers } from "redux";
import cartReducer from "./cartReducer/cartReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
