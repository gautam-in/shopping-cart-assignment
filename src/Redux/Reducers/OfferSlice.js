import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';



export const fetchOffers = createAsyncThunk('offers',async () => {
    const response = await axios.get("http://localhost:3000/categories");
    console.log(response);
    return response.data;
})


export const offerSlice = createSlice({
    name:"offer",
    initialState:{value:[],status:null},
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchOffers.pending,(state,action)=>{
            state.status = 'loading';
        })
        .addCase(fetchOffers.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.value= (action.payload);
        })
        .addCase(fetchOffers.rejected,(state)=>{
            state.status='failed';
        })
    }
})


// export const home = (state=> state.value);

export default offerSlice.reducer;