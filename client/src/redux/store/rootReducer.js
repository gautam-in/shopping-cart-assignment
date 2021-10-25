import { combineReducers } from "redux";
import { cartReducer } from "../reducer/index";

const rootReducer = combineReducers({
  cartReducer,
});

export default rootReducer;
