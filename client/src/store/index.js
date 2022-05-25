import { configureStore } from '@reduxjs/toolkit'
import reduxLogger from 'redux-logger'
import productsSlice from '../pages/products/productsSlice'
import homeSlice from '../pages/home/homeSlice'
import appSlice from '../app/appSlice'
import signInSlice from '../pages/signIn/signInSlice'
const store = configureStore({
    reducer: {
        appReducer: appSlice.reducer,
        productsReducer: productsSlice.reducer,
        homeReducer: homeSlice.reducer,
        userReducer: signInSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(reduxLogger),
})

export default store