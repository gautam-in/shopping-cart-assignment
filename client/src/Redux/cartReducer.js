import { createSlice } from "@reduxjs/toolkit";

const cartListData = createSlice({
  name: "cartBox",
  initialState: {
    cartData: [],
  },

  reducers: {
    addToCart: (state, action) => {
      const id = action.payload.id;
      const existingProduct = state.cartData.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.count = existingProduct.count + 1;
      } else {
        state.cartData.push(action.payload);
      }
    },
    incrementProduct: (state, action) => {
      const { id } = action.payload;

      const incrementingCard = state.cartData.find((item) => item.id === id);
      if (incrementingCard) {
        incrementingCard.count = incrementingCard.count + 1;
      }
    },
    decrementProduct: (state, action) => {
      const { id } = action.payload;
      const existingCard = state.cartData.find((user) => user.id === id);
      if (existingCard) {
        if (existingCard.count > 1) {
          existingCard.count = existingCard.count - 1;
        } else {
          state.cartData = state.cartData.filter((user) => user.id !== id);
        }
      }
    },
    checkOutAct: (state, action) => {
      const { val } = action.payload;
      if (val === "check") {
        state.cartData = [];
      }
    },
  },
});

export const { addToCart, incrementProduct, decrementProduct, checkOutAct } =
  cartListData.actions;

export const cartList = cartListData.reducer;
