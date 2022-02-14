import { combineReducers } from "redux";
import bannersReducer from "./banners/reducer"
import cartReducer from "./cart/reducer";
import categoryListReducer from "./category/reducer";
import productListReducer from "./products/reducer";


const rootReducer = combineReducers({
    banners : bannersReducer,
    categories: categoryListReducer,
    products: productListReducer,
    cart: cartReducer
});

export default rootReducer;