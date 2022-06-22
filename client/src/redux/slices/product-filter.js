import { createSlice } from '@reduxjs/toolkit';
import { getProductFilteredByCategories } from '../../services/ApiService';

const initialState = {
  selected_filter: 'all',
  data: [],
  status: 'idle', // 'idle' | 'loading' | 'success' | 'failed'
  error: null,
};

export const productsFilterSlice = createSlice({
  name: 'productsFilter',
  initialState,
  reducers: {
    selectedFilter: (state, action) => {
      return {
        ...state,
        selected_filter: action.payload,
      };
    },
  },
  extraReducers: {
    [getProductFilteredByCategories.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getProductFilteredByCategories.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
    [getProductFilteredByCategories.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

// Action creators are generated for each case reducer function
export const { selectedFilter } = productsFilterSlice.actions;

export default productsFilterSlice.reducer;
