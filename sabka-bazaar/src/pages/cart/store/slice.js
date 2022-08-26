import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAddToCartSuccess: false,
  addToCartLoading: true,
  error: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartLoading: (state, action) => {
      state.addToCartLoading = action.payload;
    },
    addToCartSuccess: (state, action) => {
      state.isAddToCartSuccess = action.payload;
    },
    addToCartError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addToCartLoading, addToCartSuccess, addToCartError } =
  cartSlice.actions;
export default cartSlice.reducer;
