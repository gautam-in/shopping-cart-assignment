import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  isCategoriesLoading: true,
  isProductsLoading: true,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategoriesLoading: (state, action) => {
      state.isCategoriesLoading = action.payload;
    },
    getProducts: (state, action) => {
      state.products = action.payload;
    },
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { getProducts, getCategories, setCategoriesLoading } =
  productsSlice.actions;
export default productsSlice.reducer;
