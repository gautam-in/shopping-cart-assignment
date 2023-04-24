import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer';
import authReducer from './authReducer';
import toastReducer from './toastReducer';

export default configureStore({
    reducer: {
        cart: cartReducer,
        auth: authReducer,
        toast: toastReducer
    },
});
