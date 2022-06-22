import { createSlice } from '@reduxjs/toolkit';
import { getProducts } from '../../services/ApiService';

const initialState = {
  data: [],
  status: 'idle', // 'idle' | 'loading' | 'success' | 'failed'
  error: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: {
    [getProducts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
    [getProducts.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

// Action creators are generated for each case reducer function
export const { currentState } = productsSlice.actions;

export default productsSlice.reducer;
