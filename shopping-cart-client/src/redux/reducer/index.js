import { combineReducers } from "redux";
import updateCartItems from "./cartReducers";

const rootReducer = combineReducers({
  updateCartItems
});

export default rootReducer;