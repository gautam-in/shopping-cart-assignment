import { createSlice } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "ProductCart",

  initialState: {
    cartItems: [],
  },

  reducers: {
    addProduct(state, action) {
      let newProduct = action.payload;
      let existingProduct = state.cartItems.find(
        (prd) => prd.id === newProduct.id
      );

      if (!existingProduct) {
        state.cartItems.push(newProduct);
      } else {
        existingProduct.quantity++;
        existingProduct.totalPrice =
          existingProduct.totalPrice + existingProduct.productPrice;
      }
    },

    removeProduct(state, action) {
      let pId = action.payload;

      let existingProduct = state.cartItems.find((prd) => prd.id === pId);

      if (existingProduct.quantity > 1) {
        existingProduct.quantity--;
        existingProduct.totalPrice =
          existingProduct.totalPrice - existingProduct.productPrice;
      } else {
        state.cartItems = state.cartItems.filter((prd) => prd.id !== pId);
      }
    },
    replaceCart(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const CartActions = cartSlice.actions;

export default cartSlice.reducer;
