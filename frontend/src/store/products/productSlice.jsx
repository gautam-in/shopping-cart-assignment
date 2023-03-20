import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState={
   products: {
      isLoading: false,
      data: [],
      error: "",
    },
}

export const fetchProductsData= createAsyncThunk(
   'banner/fetchProductsData',
   async () =>{
      const response= await axios.get('http://localhost:5000/products');
      return response.data
   }
)

 
const productSlice=createSlice(
   {
    name:'products',
    initialState,
    extraReducers:(builder)=>{
      builder
       .addCase(fetchProductsData.pending,(state)=>{
         state.products.isLoading=true
       })
       .addCase(fetchProductsData.fulfilled,(state,action)=>{
         console.log('fulfiled',action);
         state.products.isLoading=false;
         state.products.data=action.payload;
       })
       .addCase(fetchProductsData.rejected,(state,action)=>{
         state.products.isLoading=false;
         state.products.error=action.payload
       })
    }
   }
 )

 export const productReducer=productSlice.reducer;