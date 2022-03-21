import { combineReducers } from "redux";
import setCartStatus from "./CartReducer/cart-reducer";
import setCategoryId from "./CategoryReducer/cate-reducer";
import manageUserAction from "./UserReducer/user-reducer";

const rootReducer = combineReducers({
  user: manageUserAction,
  cateId: setCategoryId,
  cart: setCartStatus,
});

export default rootReducer;
