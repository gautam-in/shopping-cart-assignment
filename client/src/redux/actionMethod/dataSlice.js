import {createSlice} from '@reduxjs/toolkit';

import {getBanners, getCategories, getProducts} from '../actionCreators/actionCreators'
const initialState = {
    banners:{
        status:null,
        data:[],
        error:null
    },
    categories:{
        status:null,
        data:[],
        error:null
    },
    products:{
        status:null,
        data:[],
        error:null
    }
}

const dataSlice = createSlice({
    name:'data',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getBanners.pending,state=>{
            state.banners.status = 'pending'
        }).addCase(getBanners.fulfilled,(state,action) =>{
            state.banners.status = 'success';
            state.banners.data = action.payload;
        }).addCase(getBanners.rejected,(state,action)=>{
            state.banners.status = 'failed';
            state.banners.error = action.error;
        });

        builder.addCase(getCategories.pending,state=>{
            state.categories.status = 'pending'
        }).addCase(getCategories.fulfilled,(state,action) =>{
            state.categories.status = 'success';
            state.categories.data = action.payload;
        }).addCase(getCategories.rejected,(state,action)=>{
            state.categories.status = 'failed';
            state.categories.error = action.error;
        });

        builder.addCase(getProducts.pending,state=>{
            state.products.status = 'pending'
        }).addCase(getProducts.fulfilled,(state,action) =>{
            state.products.status = 'success';
            state.products.data = action.payload;
        }).addCase(getProducts.rejected,(state,action)=>{
            state.products.status = 'failed';
            state.products.error = action.error;
        });
    }
});

export default dataSlice.reducer;