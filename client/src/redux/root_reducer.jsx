import {combineReducers} from 'redux'

import cartReducer from './cart/cart.reducer';

const rootReducer = combineReducers({
    cart: cartReducer
})

export default rootReducer;