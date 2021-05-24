import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import fetchOffers from "services/home";

import { banner } from "server/banners/banner-demo";
import { category } from "./categories-demo";

// fetch all the offers
export const getOffers = createAsyncThunk(
  "childProfile/getOffers",
  async () => {
    try {
      // const res = await fetchOffers();
      // console.log({ res });
      return banner;
    } catch (error) {
      throw new Error(error?.message ?? "Get offer details failed");
    }
  }
);

// fetch all the offers
export const getCategories = createAsyncThunk(
  "childProfile/getCategories",
  async () => {
    try {
      //   const res = await fetchOffers();
      return category;
    } catch (error) {
      throw new Error(error?.message ?? "Get categories failed");
    }
  }
);

const initialState = {
  isLoading: false,
  isError: null,
  offers: [],
  categories: [],
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {},
  extraReducers: {
    [getOffers.pending]: (state) => {
      state.isLoading = true;
      state.offers = [];
      state.isError = null;
    },
    [getOffers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.offers = action.payload;
      state.isError = null;
    },
    [getOffers.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    },
    [getCategories.pending]: (state) => {
      state.isLoading = true;
      state.categories = [];
      state.isError = null;
    },
    [getCategories.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.categories = action.payload;
      state.isError = null;
    },
    [getCategories.rejected]: (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    },
  },
});

const { reducer } = homeSlice;
export default reducer;
