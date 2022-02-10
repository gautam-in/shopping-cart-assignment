import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showCart: false,
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
      } else {
        const newItem = { ...payload, cartQuantity: 1 };
        state.cartItems.push(newItem);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart: (state, { payload }) => {
      const newCartItems = state.cartItems.filter((c) => c.id !== payload.id);
      state.cartItems = newCartItems;
      localStorage.setItem("cartItems", JSON.stringify(newCartItems));
    },

    decreaseQuantity: (state, { payload }) => {
      const cartItemIndex = state.cartItems.findIndex(
        (c) => c.id === payload.id
      );

      if (state.cartItems[cartItemIndex].cartQuantity > 1) {
        state.cartItems[cartItemIndex].cartQuantity -= 1;
      } else {
        const newCartItems = state.cartItems.filter((c) => c.id !== payload.id);
        state.cartItems = newCartItems;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },

    setShowCart: (state, { payload }) => {
      return {
        ...state,
        showCart: payload || !state.showCart,
      };
    },

    getTotal: (state, { payload }) => {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});

export const {
  addToCart,
  setShowCart,
  removeFromCart,
  decreaseQuantity,
  getTotal,
} = cartSlice.actions;

export default cartSlice.reducer;
