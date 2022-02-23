import { combineReducers } from "redux";
import bannersReducer from "./bannersReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import productsReducer from "./productsReducer";


const rootReducer = combineReducers({
    banners : bannersReducer,
    categories: categoryReducer,
    products: productsReducer,
    cart: cartReducer
});

export default rootReducer;