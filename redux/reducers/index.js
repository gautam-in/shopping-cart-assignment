import { combineReducers } from 'redux';
import categoryListReducer from './categoryListReducer'
import productsBuyReducer from './productsBuyReducer';
import productsReducer from './productsReducer'

export default combineReducers({
    categoryList : categoryListReducer,
    products : productsReducer,
    productsBought : productsBuyReducer
})