import { createSlice } from "@reduxjs/toolkit";
import { ProductReducerInterface } from "./interface";

const initialState:ProductReducerInterface = {
  products: [],
  categories: [],
  currentCategory: null,
};

export const productSlice= createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProducts, setCurrentCategory, setCategories } = productSlice.actions;

export default productSlice.reducer;
