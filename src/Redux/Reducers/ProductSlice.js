import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchProducts = createAsyncThunk('product',async () => {
    const response = await axios.get("http://localhost:3000/products");
    return response.data;
})

export const productSlice = createSlice({
    name:"product",
    initialState:{value:[],categories:null,status:null},
    reducers:{
        setProductsCategory: (state, action) => {
            state.categories = action.payload;
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchProducts.pending,(state,action)=>{
            state.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            if(state.categories!=null)
            {
            state.value= (action.payload.filter(item=> item.category==state.categories));
            }
            else{
                state.value = action.payload;
            }
        })
        .addCase(fetchProducts.rejected,(state)=>{
            state.status='failed';
        })
    }
})


// export const home = (state=> state.value);
export const { setProductsCategory } = productSlice.actions

export default productSlice.reducer;