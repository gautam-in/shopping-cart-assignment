import { combineReducers } from 'redux';
import { cartReducer } from './cart';
import { categoryReducer } from './category';

export const rootReducer = combineReducers({
    cart: cartReducer,
    category: categoryReducer
})