import {configureStore} from '@reduxjs/toolkit';
import cartSlice from './slice/cartSlice';
import dataSlice from './slice/dataSlice';

const store = configureStore({
    reducer:{
        // auth:undefined,
        cart:cartSlice,
        data:dataSlice
    }
});

export default store;