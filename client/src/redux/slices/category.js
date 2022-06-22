import { createSlice } from '@reduxjs/toolkit';
import { getCategories } from '../../services/ApiService';

const initialState = {
  data: [],
  status: 'idle', // 'idle' | 'loading' | 'success' | 'failed'
  error: null,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: {
    [getCategories.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getCategories.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
    [getCategories.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentState } = categorySlice.actions;

export default categorySlice.reducer;
