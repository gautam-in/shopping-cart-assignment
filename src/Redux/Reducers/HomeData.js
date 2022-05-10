import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchBanners = createAsyncThunk('home',async () => {
    const response = await axios.get("http://localhost:3000/banners");
    return response.data;
})

export const homesSlice = createSlice({
    name:"home",
    initialState:{value:[],offers:[],status:null},
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchBanners.pending,(state,action)=>{
            state.status = 'loading';
        })
        .addCase(fetchBanners.fulfilled,(state,action)=>{
            state.status = 'succeeded';
            state.value= (action.payload);
        })
        .addCase(fetchBanners.rejected,(state)=>{
            state.status='failed';
        })
    }
})


// export const home = (state=> state.value);

export default homesSlice.reducer;