// import * as types  from "../constants/actionTypes";
import { combineReducers } from 'redux';
import cartReducer from './cart/cartReducer';
import homeReducer from './homepage/homeReducer';
import userReducer from './loginpage/userReducer';
import productReducer from './productpage/productReducer';


const reducer = combineReducers({
	cartReducer,
    homeReducer,
    productReducer,
    userReducer
})
const rootReducer =  (state,action) =>{
    return reducer(state,action)
}
export default rootReducer;