import { combineReducers } from "redux";
import { productlist } from "./productlist.reducer";
import {addtocart} from "./addtocart.reducer";

const rootReducer = combineReducers({ productlist, addtocart });
export default rootReducer;
