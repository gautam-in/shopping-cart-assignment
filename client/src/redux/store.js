import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './actionMethod/cartSlice';
import dataSlice from './actionMethod/dataSlice';
import authSlice from './actionMethod/authSlice';

const store = configureStore({
    reducer:{
        auth:authSlice,
        cart:cartSlice,
        data:dataSlice
    }
});

export default store;