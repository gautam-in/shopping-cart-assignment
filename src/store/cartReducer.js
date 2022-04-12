import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartTotalAmount: 0,
  cartTotalItemsCount: 0,
  isCartOpen: false,
};
const addItemToCart = (cartItems, newItem) => {
  const isExistingItem = cartItems.find((item) => item.id === newItem.id);

  if (isExistingItem) {
    return cartItems.map((cartItem) => {
      return cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...newItem, quantity: 1 }];
};

const removeItemToCart = (cartItems, newItem) => {
  if (newItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== newItem.id);
  }

  return cartItems.map((cartItem) => {
    return cartItem.id === newItem.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};

const updateCartReducer = (newCartItems) => {
  const newCartCount = newCartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const newCartTotal = newCartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  return {
    cartItems: newCartItems,
    cartTotalItemsCount: newCartCount,
    cartTotalAmount: newCartTotal,
  };
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartOpen(state, { payload }) {
      state.isCartOpen = payload;
    },
    addItem(state, { payload }) {
      const newCartItems = addItemToCart(state.cartItems, payload);
      const { cartItems, cartTotalItemsCount, cartTotalAmount } =
        updateCartReducer(newCartItems);
      state.cartItems = cartItems;
      state.cartTotalItemsCount = cartTotalItemsCount;
      state.cartTotalAmount = cartTotalAmount;
    },
    removeItem(state, { payload }) {
      const newCartItems = removeItemToCart(state.cartItems, payload);
      const { cartItems, cartTotalItemsCount, cartTotalAmount } =
        updateCartReducer(newCartItems);
      state.cartItems = cartItems;
      state.cartTotalItemsCount = cartTotalItemsCount;
      state.cartTotalAmount = cartTotalAmount;
    },
  },
});

export default cartSlice.reducer;

export const cartActions = cartSlice.actions;
