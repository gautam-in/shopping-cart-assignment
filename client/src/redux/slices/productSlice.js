import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "./../../services/index";

export const fetchAsyncBanners = createAsyncThunk(
  "products/fetchAsyncBanners",
  async () => {
    const response = await axiosInstance.get("banners");
    return response.data;
  }
);

export const fetchAsyncCategories = createAsyncThunk(
  "products/fetchAsyncCategories",
  async () => {
    const response = await axiosInstance.get("categories");
    const filteredResponse = response.data.filter((el) => el.enabled === true);
    return filteredResponse.sort((a, b) => a.order > b.order);
  }
);

export const fetchAsyncProducts = createAsyncThunk(
  "products/fetchAsyncProducts",
  async (term) => {
    if (!term) {
      const response = await axiosInstance.get("products");
      return response.data;
    } else {
      const response = await axiosInstance.get("products");
      const filteredResponse = response.data.filter(
        (product) => product.category === term
      );
      return filteredResponse;
    }
  }
);

const initialState = {
  categories: {},
  isLoading: true,
  products: {},
  banners: {},
};

const productSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {},
  extraReducers: {
    [fetchAsyncBanners.pending]: (state) => {
      state.isLoading = true;
    },

    [fetchAsyncBanners.fulfilled]: (state, { payload }) => {
      state.banners = payload;
      state.isLoading = false;
    },

    [fetchAsyncBanners.rejected]: (state) => {
      state.isLoading = false;
    },

    [fetchAsyncCategories.pending]: (state) => {
      state.isLoading = true;
    },

    [fetchAsyncCategories.fulfilled]: (state, { payload }) => {
      state.categories = payload;
      state.isLoading = false;
    },

    [fetchAsyncCategories.rejected]: (state) => {
      state.isLoading = false;
    },

    [fetchAsyncProducts.pending]: (state) => {
      state.isLoading = true;
    },

    [fetchAsyncProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
      state.isLoading = false;
    },

    [fetchAsyncProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const getAllCategories = (state) => state.products.categories;
export const getAllProducts = (state) => state.products.products;
export const getAllBanners = (state) => state.products.banners;

export default productSlice.reducer;
