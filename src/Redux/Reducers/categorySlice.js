import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosAPI from "../../api/axiosAPI";

// First, create the thunk
export const getCategoryData = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    const response = await axiosAPI.category.get();
    return response.data;
  }
);
const initialState = {
  categoryItems: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCategoryData.fulfilled, (state, action) => {
      // Add user to the state array
      state.categoryItems = action.payload;
    });
  },
});

// export const { addToBasket, removeFromBasket } = productsSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.category.categoryItems;

export default categorySlice.reducer;
