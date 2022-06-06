import { configureStore } from '@reduxjs/toolkit';
import authSlice from './reducers/UserReducer';
import cartSlice from './reducers/CartReducer';

const store = configureStore({
	reducer: {
		auth: authSlice,
		cart: cartSlice,
	},
});

export default store;
