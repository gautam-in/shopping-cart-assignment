import { combineReducers } from "redux";
import { cartReducer, userLoginReducer } from "../reducer/index";

const rootReducer = combineReducers({
  cartReducer,
  userLoginReducer,
});

export default rootReducer;
