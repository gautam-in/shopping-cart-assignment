import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  addToCartLoading: true,
  error: "",
  cart: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartLoading: (state, action) => {
      state.addToCartLoading = action.payload;
    },
    addToCartSuccess: (state, action) => {
      state.cart = action.payload;
    },
    addToCartError: (state, action) => {
      state.error = action.payload;
    },
    updateCart: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const {
  addToCartLoading,
  addToCartSuccess,
  addToCartError,
  updateCart,
} = cartSlice.actions;
export default cartSlice.reducer;
