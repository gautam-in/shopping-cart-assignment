import { createSlice } from "@reduxjs/toolkit";
import { getBanners, getCategories, getProducts } from "../utils/api";

export const productsSlice = createSlice({
  name: "cart",
  initialState: {
    banners: [],
    categories: [],
    products: [],
    selectedCategory: ""
  },
  reducers: {
    updateProductsData: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    setSelectedCategory: (state, action) => {
      return {
        ...state,
        selectedCategory: action.payload,
      };
    },
  },
});

export const fetchBanners = () => (dispatch, getState) => {
  let data = getState().productsReducer.banners;
  if (!data.length) {
    getBanners((resp) => dispatch(updateProductsData({ banners: [...resp] })));
  }
};

export const fetchCategories = () => (dispatch, getState) => {
  let data = getState().productsReducer.categories;
  if (!data.length) {
    getCategories((resp) =>
      dispatch(updateProductsData({ categories: [...resp] }))
    );
  }
};

export const fetchProducts = () => (dispatch, getState) => {
  let data = getState().productsReducer.products;
  if (!data.length) {
    getProducts((resp) =>
      dispatch(updateProductsData({ products: [...resp] }))
    );
  }
};

// Action creators are generated for each case reducer function
export const { updateProductsData, setSelectedCategory } = productsSlice.actions;

export default productsSlice.reducer;
