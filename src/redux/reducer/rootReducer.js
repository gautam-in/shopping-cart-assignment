import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const Reducer = combineReducers({ cart: cartReducer });

export default Reducer;
