import {combineReducers} from 'redux';
import productReducer from '../reducers/product';
import cartReducer from '../reducers/cart';
import carauselReducer from '../reducers/carausel';

export const rootReducer = combineReducers({
    products: productReducer,
    cart: cartReducer,
    carausel: carauselReducer,
})