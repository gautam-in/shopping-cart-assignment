import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const initialState = {
  categories: {
    isLoading: false,
    data: [],
    error: "",
  },
};

export const fetchCategoriesData = createAsyncThunk(
  "categories/fetchCategoriesData",
  async () => {
    const response = await axios.get("http://localhost:5000/categories");
    return response.data;
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesData.pending, (state) => {
        state.categories.isLoading = true;
      })
      .addCase(fetchCategoriesData.fulfilled, (state, action) => {
        state.categories.isLoading = false;
        state.categories.data = action.payload;
      })
      .addCase(fetchCategoriesData.rejected, (state, action) => {
        state.categories.data = [];
        state.categories.error = action.payload;
      });
  },
});

export default categoriesSlice.reducer;
