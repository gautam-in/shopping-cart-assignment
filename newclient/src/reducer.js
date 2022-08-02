import { combineReducers } from "redux";
import cartadddeleteitem from "./reducer/CartAddDeleteItem.js";
import cartmodalstate from "./reducer/CardModalState";
const rootReducer = combineReducers({
  cartadddeleteitem,
  cartmodalstate,
});

export default rootReducer;
