import {configureStore} from "@reduxjs/toolkit"
import CategoryReducer from "../features/category/CategorySlice"
import ProductListReducer from "../features/productList/ProductListSlice"
import CartReducer from "../features/cart/CartSlice"
import logger from 'redux-logger'

import thunk from "redux-thunk"

const store=configureStore({
    reducer:{
       CategoryReducer,
       ProductListReducer,
        CartReducer
       
        
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    // middleware:[thunk]
})

export default store;