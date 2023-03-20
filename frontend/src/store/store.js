import {configureStore, createAction, createReducer} from '@reduxjs/toolkit';
import { Action } from '@remix-run/router';
import {bannerReducer} from './banner/bannerSlice';
import { cartReducer } from './cart/cartSlice';
import { categoryReducer } from './categories/categoriesSlice';
import { productReducer } from './products/productSlice';
import { userReducer } from './user/userSlice';



export const store=configureStore({
    reducer:{
      banner:  bannerReducer,
      category:categoryReducer,
      products:productReducer,
      cart:cartReducer,
      user:userReducer
    },
    
})