import { createSlice, current } from "@reduxjs/toolkit";

let cartSlice = createSlice({
  name: "ProductCart",

  initialState: {
    cartItems: [],
    total: 0,
    count: 0,
  },

  reducers: {
    addProduct(state, action) {
      let product = action.payload;
      let existingProduct = state.cartItems.find(
        (prd) => prd.id === product.id
      );

      if (existingProduct) {
        existingProduct.qty = existingProduct.qty + 1;
        existingProduct.totalPrice =
          existingProduct.totalPrice + existingProduct.price;
      } else {
        product.qty = 1;
        product.totalPrice = product.price;
        state.cartItems.push(product);
      }

      let total = state.cartItems.reduce(
        (acc, item) => item.price * item.qty + acc,
        0
      );
      let count = state.cartItems.reduce((acc, item) => acc + item.qty, 0);
      state.count = count;
      state.total = total;
    },

    removeProduct(state, action) {
      console.log();
      let product = action.payload;

      let existingProduct = state.cartItems.find(
        (prd) => prd.id === product.id
      );

      if (existingProduct.qty > 1) {
        existingProduct.qty--;
        existingProduct.totalPrice =
          existingProduct.totalPrice - existingProduct.price;
      } else {
        state.cartItems = state.cartItems.filter(
          (prd) => prd.id !== product.id
        );
      }
      let newCount = state.cartItems.reduce((acc, item) => item.qty + acc, 0);
      let newTotal = state.cartItems.reduce(
        (acc, item) => item.qty * item.price + acc,
        0
      );
      state.total = newTotal;
      state.count = newCount;
    },
  },
});

export const CartActions = cartSlice.actions;

export default cartSlice.reducer;
