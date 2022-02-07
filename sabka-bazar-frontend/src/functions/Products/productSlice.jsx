import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { compare } from "../../Components/common/sort";

//fetch the banners
export const fetchAsyncBanners = createAsyncThunk(
  "products/fetchAsyncBanners",
  async () => {
    const response = await axios.get("http://localhost:5001/banners");
    return response.data;
  }
);

// fetch the categories
export const fetchAsyncCategories = createAsyncThunk(
  "products/fetchAsyncCategories",
  async () => {
    const response = await axios.get("http://localhost:5001/categories");
    const filteredResponse = response.data.filter(
      (ele) => ele.enabled === true
    );
    return filteredResponse.sort(compare);
  }
);

// fetch the products
export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async (term) => {
    if (!term) {
      const response = await axios.get("http://localhost:5001/products");
      return response.data;
    } else {
      const response = await axios.get("http://localhost:5001/products");
      const filteredResponse = response.data.filter(
        (product) => product.category === term
      );
      return filteredResponse;
    }
  }
);

const initialState = {
  categories: {},
  loaded: true,
  products: {},
  banners: {},
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncCategories.pending]: (state) => {
      console.log("pending");
      return {
        ...state,
        loaded: true,
      };
    },

    [fetchAsyncCategories.fulfilled]: (state, { payload }) => {
      console.log("Fetched Properly");
      return {
        ...state,
        categories: payload,
        loaded: false,
      };
    },

    [fetchAsyncCategories.rejected]: () => {
      console.log("Rejected");
    },

    // for the products
    [fetchAsyncProducts.pending]: (state) => {
      console.log("pending");
      return {
        ...state,
      };
    },

    [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
      console.log("Fetched Properly");
      return {
        ...state,
        products: payload,
      };
    },

    [fetchAsyncProducts.rejected]: () => {
      console.log("Rejected Products");
    },

    //banners
    [fetchAsyncBanners.fulfilled]: (state, { payload }) => {
      console.log("Fetched Properly");
      return {
        ...state,
        banners: payload,
      };
    },
  },
});

// console.log(state);

// exposing the categories
export const getAllCategories = (state) => state.products.categories;
export const getAllProducts = (state) => state.products.products;
export const loaded = (state) => state.products.loaded;

// exporting the slice outside
export default productSlice.reducer;
