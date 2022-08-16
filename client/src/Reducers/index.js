import { combineReducers } from "redux"
import getCategoriesReducer from './GetCategories'
import getProductsReducer from './GetProducts'
// import cartReducer from './Cart'
import cartReducer from './CartItems_R'
import getBannersReducer from "./Banners_R";
// import clearCartReducer from './ClearCart'

export default combineReducers({
    categories:getCategoriesReducer,
    products:getProductsReducer,
    banners:getBannersReducer,
    cartItems:cartReducer,
    // cartItems:[]
});