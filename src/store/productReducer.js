import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  isLoading: false,
  hasError: false,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const responce = await fetch("http://localhost:5000/products");
  const productsData = await responce.json();
  return productsData;
});

const productSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getProducts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.products = payload;
    },
    [getProducts.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default productSlice.reducer;
