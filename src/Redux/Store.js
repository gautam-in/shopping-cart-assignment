import {configureStore} from '@reduxjs/toolkit';
import homesSlice from './Reducers/HomeData'
import offerSlice  from './Reducers/OfferSlice';
import productSlice  from './Reducers/ProductSlice';
import cartSlice  from './Reducers/CartSlice';
import  registerSlice  from './Reducers/RegisterSlice';



const Store = configureStore({
    reducer:{
        home:homesSlice,
        offer:offerSlice,
        product:productSlice,
        cart:cartSlice,
        register:registerSlice
    }
});

export default Store;