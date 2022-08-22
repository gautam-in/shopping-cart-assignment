import { combineReducers } from 'redux';
import cart from './cartReducer'
import products from "./productsReducer";
const rootReducer = combineReducers({
    cart,
    products
});

export default rootReducer
