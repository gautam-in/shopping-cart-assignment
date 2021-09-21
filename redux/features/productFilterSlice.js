/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  appliedFilters: [],
};

const productFilterSlice = createSlice({
  name: 'productFilter',
  initialState: INITIAL_STATE,
  reducers: {
    addFilter: (state, action) => {
      state.appliedFilters.push(action.payload);
    },

    removeFilter: (state, action) => {
      const newFilters = state.appliedFilters.map((filter) => {
        if (filter === action.payload) return filter;
        return null;
      });
      state.appliedFilters = newFilters;
    },

    addOrRemoveFilter: (state, action) => {
      // To check if the filter is already selected.
      const filterSelected = state.appliedFilters.includes(action.payload);
      // if selected filter is already selected then remove it. Else add it
      if (filterSelected) {
        const newFilters = state.appliedFilters.filter((filter) => {
          if (filter !== action.payload) return true;

          return false;
        });
        state.appliedFilters = newFilters;
      } else {
        state.appliedFilters.push(action.payload);
      }
    },
  },
});

export const { addFilter, removeFilter, addOrRemoveFilter } = productFilterSlice.actions;

export const filters = (state) => state.productFilter.appliedFilters;

export default productFilterSlice.reducer;
