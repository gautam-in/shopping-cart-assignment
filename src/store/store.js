import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartReducer';

export default configureStore({
    reducer: {
        cart: cartReducer
    },
});
