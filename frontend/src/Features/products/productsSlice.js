import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  products: {
    isLoading: false,
    data: [],
    error: "",
  },
};

export const fetchProductsData = createAsyncThunk(
  "banner/fetchProductsData",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsData.pending, (state) => {
        state.products.isLoading = true;
      })
      .addCase(fetchProductsData.fulfilled, (state, action) => {
        state.products.isLoading = false;
        state.products.data = action.payload;
      })
      .addCase(fetchProductsData.rejected, (state, action) => {
        state.products.data = [];
        state.products.error = action.payload;
      });
  },
});

export default productsSlice.reducer;
