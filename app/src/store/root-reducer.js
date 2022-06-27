import { combineReducers } from 'redux';
import { cartReducer } from './reducer/cart.reducer';

export const rootReducer = combineReducers({
    cart:cartReducer
})