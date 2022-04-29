import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  totalQty: localStorage.getItem("totalCartItems")
    ? JSON.parse(localStorage.getItem("totalCartItems"))
    : 0,
  totalPrice: localStorage.getItem("totalCartPrice")
    ? JSON.parse(localStorage.getItem("totalCartPrice"))
    : 0,
  categories: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload.item;
      const existing = state.cartItems.find((i) => i.id === newItem.id);
      state.totalQty++;
      if (!existing) {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          imageUrl: newItem.imageURL,
          totalItemPrice: newItem.price,
          name: newItem.name,
          stock: newItem.stock - 1,
        });
      } else {
        existing.quantity++;
        existing.totalItemPrice += existing.price;
        existing.stock--;
      }
      state.totalPrice += newItem.price;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalCartItems", JSON.stringify(state.totalQty));
      localStorage.setItem("totalCartPrice", JSON.stringify(state.totalPrice));
    },

    reduceQuantity(state, action) {
      const itemId = action.payload.id;
      const existingItemIndex = state.cartItems.findIndex(
        (i) => i.id === itemId
      );
      state.cartItems[existingItemIndex].totalItemPrice -=
        state.cartItems[existingItemIndex].price;
      if (state.cartItems[existingItemIndex].quantity > 1) {
        state.cartItems[existingItemIndex].quantity--;
        state.totalPrice -= state.cartItems[existingItemIndex].price;
      } else {
        const finalCartItems = state.cartItems.filter(
          (item) => item.id !== itemId
        );
        state.totalPrice -= state.cartItems[existingItemIndex].price;
        state.cartItems = finalCartItems;
      }
      state.totalQty--;

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalCartItems", JSON.stringify(state.totalQty));
      localStorage.setItem("totalCartPrice", JSON.stringify(state.totalPrice));
    },

    removeItem(state, action) {
      const id = action.payload.id;
      const finalCartItems = state.cartItems.filter((i) => i.id !== id);
      const existingItemIndex = state.cartItems.findIndex((i) => i.id === id);

      state.totalQty -= state.cartItems[existingItemIndex].quantity;
      state.totalPrice -= state.cartItems[existingItemIndex].totalItemPrice;
      state.cartItems = finalCartItems;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      localStorage.setItem("totalCartItems", JSON.stringify(state.totalQty));
      localStorage.setItem("totalCartPrice", JSON.stringify(state.totalPrice));
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
