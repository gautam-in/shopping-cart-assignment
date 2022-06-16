import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosAPI from "../../api/axiosAPI";

// First, create the thunk
export const getProductData = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axiosAPI.products.get();
    return response.data;
  }
);

const initialState = {
  items: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getProductData.fulfilled, (state, action) => {
      // Add user to the state array
      state.items = action.payload;
    });
  },
});

export const { initial } = productsSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.products.items;

export default productsSlice.reducer;
