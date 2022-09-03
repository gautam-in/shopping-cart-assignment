import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  categories: [],
  isCategoriesLoading: true,
  isProductsLoading: true,
  productsError: "",
  categoriesError: "",
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setCategoriesLoading: (state, action) => {
      state.isCategoriesLoading = action.payload;
    },
    setProductsLoading: (state, action) => {
      state.isProductsLoading = action.payload;
    },
    setProductsError: (state, action) => {
      state.productsError = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCategoriesError: (state, action) => {
      state.categoriesError = action.payload;
    },
  },
});

export const {
  setProducts,
  setCategories,
  setCategoriesLoading,
  setProductsLoading,
  setCategoriesError,
  setProductsError,
} = productsSlice.actions;
export default productsSlice.reducer;
