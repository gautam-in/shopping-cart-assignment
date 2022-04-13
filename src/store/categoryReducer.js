import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
  isLoading: false,
  hasError: false,
};

export const getCategory = createAsyncThunk("categories", async () => {
  const responce = await fetch("http://localhost:5000/categories");
  const categoryData = await responce.json();
  categoryData.sort((a, b) => {
    return a.order - b.order;
  });
  return categoryData;
});

const categorySlice = createSlice({
  name: "category",
  initialState,
  extraReducers: {
    [getCategory.pending]: (state) => {
      state.isLoading = true;
    },
    [getCategory.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.categories = payload;
    },
    [getCategory.rejected]: (state) => {
      state.isLoading = false;
      state.hasError = true;
    },
  },
});

export default categorySlice.reducer;
