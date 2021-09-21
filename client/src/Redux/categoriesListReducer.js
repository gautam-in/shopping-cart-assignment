import { createSlice } from "@reduxjs/toolkit";

const categoriesListCart = createSlice({
  name: "productBox",
  initialState: {
    categoriesListData: [],
  },

  reducers: {
    accessCategoriesDataList: (state, action) => {
      state.categoriesListData = action.payload;
    },
  },
});

export const { accessCategoriesDataList } = categoriesListCart.actions;

export const categoriesList = categoriesListCart.reducer;
