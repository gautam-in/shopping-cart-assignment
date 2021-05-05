import { combineReducers } from "redux";
import addItemReducer from "./addItem/addItemReducer";
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
  addItems: addItemReducer,
  products: productsReducer,
});

export default rootReducer;
