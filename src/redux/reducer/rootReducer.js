import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import productReducer from "./productReducer";
import categoriesReducer from "./categoriesReducer";
import otherReducer from "./otherReducer";

const Reducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
  categories: categoriesReducer,
  others: otherReducer,
});

export default Reducer;
