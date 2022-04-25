import { combineReducers } from "redux";
import bannersReducer from "./bannersReducer";
import categoryReducer from "./categoryReducer";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "../reducers/addtocartReducer";
import { userauthReducer } from "./userauthReducer";

export const rootReducer = combineReducers({ category: categoryReducer, banners: bannersReducer, products: productsReducer, cart: cartReducer, user: userauthReducer })

