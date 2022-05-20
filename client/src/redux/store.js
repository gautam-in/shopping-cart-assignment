import {configureStore} from '@reduxjs/toolkit';
import dataSlice from './slice/dataSlice';

const store = configureStore({
    reducer:{
        // auth:undefined,
        data:dataSlice
    }
});

export default store;