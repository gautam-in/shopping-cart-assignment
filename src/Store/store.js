import { combineReducers } from "redux";
import bannerReducer from "./reducers/banner";
import product from './reducers/product';
import cartReducer from './reducers/cart';

export const rootReducer = combineReducers({
    product,
    bannerReducer,
    cartReducer
});