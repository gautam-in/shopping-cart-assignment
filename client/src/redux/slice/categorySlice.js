import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  activeCategory: "All",
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    STORE_CATEGORIES(state, action) {
      state.categories = action.payload.categories;
    },
    SET_ACTIVE_CATEGORY(state, action) {
      state.activeCategory = action.payload.category;
    },
  },
});

export const { STORE_CATEGORIES, SET_ACTIVE_CATEGORY } = categorySlice.actions;

export const selectCategories = (state) => state.category.categories;
export const selectActiveCategory = (state) => state.category.activeCategory;

export default categorySlice.reducer;
