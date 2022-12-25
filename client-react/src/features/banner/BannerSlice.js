import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { serverAPI } from '../../utils/URL';

const initialState = {
  loading: false,
  banners: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchBanners = createAsyncThunk('fetchBanners', () => {
  return axios
    .get(process.env.REACT_APP_BASE_URL + serverAPI.bannerURL)
    .then(response => response.data)
})

const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchBanners.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchBanners.fulfilled, (state, action) => {
      state.loading = false
      state.banners = action.payload
      state.error = ''
    })
    builder.addCase(fetchBanners.rejected, (state, action) => {
      state.loading = false
      state.banners = []
      state.error = action.error.message
    })
  }
})

export default bannerSlice.reducer
