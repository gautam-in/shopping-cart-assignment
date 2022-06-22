import { createSlice } from '@reduxjs/toolkit';
import { getBanners } from '../../services/ApiService';

const initialState = {
  data: [],
  status: 'idle', // 'idle' | 'loading' | 'success' | 'failed'
  error: null,
};

export const bannerSlice = createSlice({
  name: 'banner',
  initialState,
  extraReducers: {
    [getBanners.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getBanners.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
    [getBanners.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentState } = bannerSlice.actions;

export default bannerSlice.reducer;
