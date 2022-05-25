import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    basket: [],
    count: 0,
    totalPrice: 0,
    isCartOpen: false,
  },

  reducers: {
    addItemToCart: (state, action) => {
      const existingCartItem = state.basket.find(
        (cart) => cart.id === action.payload.id
      );

      state.basket = existingCartItem
        ? state.basket.map((cartItem) =>
            cartItem.id === action.payload.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        : [...state.basket, { ...action.payload, quantity: 1 }];
    },
    removeItemFromCart: (state, action) => {
      const existingCartItem = state.basket.find(
        (cart) => cart.id === action.payload?.id
      );

      state.basket =
        existingCartItem.quantity === 1
          ? state.basket.filter(
              (cartItem) => cartItem.id !== action.payload?.id
            )
          : state.basket.map((cartItem) =>
              cartItem.id === action.payload?.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            );
    },
    openCart: (state, action) => {
      state.isCartOpen = action.payload;
    },
  },
});

export const selectCount = (state) =>
  state.app.basket.reduce((acc, basket) => acc + basket.quantity, 0);

export const selectTotalPrice = (state) =>
  state.app.basket.reduce(
    (acc, basket) => acc + basket.quantity * basket.price,
    0
  );

export const { addItemToCart, removeItemFromCart, openCart } = appSlice.actions;

export const selectBasket = (state) => state.app.basket;
export const selectIsCartOpen = (state) => state.app.isCartOpen;

export default appSlice.reducer;
