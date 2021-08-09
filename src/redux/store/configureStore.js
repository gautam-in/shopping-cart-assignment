import {createStore, combineReducers, applyMiddleware} from "redux";
import bannersReducer from "../banner/bannerReducer";
import categoriesReducer from "../category/categoryReducer";
import cartReducer from "../cart/cartReducer";
import productsReducer from "../product/productReducer";
import thunk from "redux-thunk"


const configureStore = () => {
    const store = createStore(combineReducers({
        banners:bannersReducer,
        categories:categoriesReducer,
        products:productsReducer,
        cartproducts: cartReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore
