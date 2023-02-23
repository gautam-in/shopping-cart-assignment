import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    STORE_CATEGORIES(state, action) {
      state.categories = action.payload.categories;
    },
  },
});

export const { STORE_CATEGORIES } = categorySlice.actions;

export const selectCategories = (state) => state.category.categories;

export default categorySlice.reducer;
