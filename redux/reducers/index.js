import { combineReducers } from 'redux';
import categoryListReducer from './categoryListReducer'
import productsReducer from './productsReducer'

export default combineReducers({
    categoryList : categoryListReducer,
    products : productsReducer
})