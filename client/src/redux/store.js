import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import dataSlice from './slice/dataSlice';
import authSlice from './slice/authSlice';

const store = configureStore({
    reducer:{
        auth:authSlice,
        cart:cartSlice,
        data:dataSlice
    }
});

export default store;