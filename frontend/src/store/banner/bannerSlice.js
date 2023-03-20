import {createAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const initialState={
    banner:{
        isLoading:false,
        data:[],
        error:''
    }
}

export const fetchBannerData=createAsyncThunk(
    'banner/fetchBannerData',
    async ()=>{
        const response=await axios.get('http://localhost:5000/banners');
        return response.data
    }
)

export const bannerSlice=createSlice({
    name:'banner',
    initialState:initialState,
    reducers:{},
    extraReducers:(builder)=>{
      builder
        .addCase(fetchBannerData.pending,(state)=>{
        
          state.banner.isLoading=true;
        })
        .addCase(fetchBannerData.fulfilled,(state,action)=>{
            state.banner.pending=false;
            state.banner.data=action.payload;      
        })
        .addCase(fetchBannerData.rejected,(state,action)=>{
            state.banner.pending=false;
            state.banner.data=[];
            state.banner.error=action.payload;
        })
    }

})

export const bannerAction=bannerSlice.actions;
export const bannerReducer=bannerSlice.reducer;