import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import axios  from "axios"

const initialState={
    loading:'true',
    data:[],
    error:""
}

export const fetchProductList=createAsyncThunk('products/fetchProductList',async()=>{
    const response=await axios.get("http://localhost:4000/products")
    console.log("sssssss",response.data)
   
    return response.data

})

const ProductListSlice=createSlice({
    name:'products',
    initialState,
    extraReducers:{
        [fetchProductList.pending]:(state)=>{
            state.loading=true
            state.data=[]
            state.error=""
        },
        [fetchProductList.fulfilled]:(state,action)=>{
            state.loading=true
            state.data= action.payload.map(item=>{
                return{
                    ...item,
                    quantity:1
                }
            })
            state.error=""
        },
        [fetchProductList.rejected]:(state,action)=>{
            state.loading=false
            state.data=[]
            state.error=""
        },
    }
})

export default ProductListSlice.reducer