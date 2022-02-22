import {
    combineReducers
} from "redux";
import categoryReducer from "./categoryReducer";
import productReducer from './productReducer'
import cartReducer from './cartReducer'

export default combineReducers({
    products: productReducer,
    catagories: categoryReducer,
    cart : cartReducer
})