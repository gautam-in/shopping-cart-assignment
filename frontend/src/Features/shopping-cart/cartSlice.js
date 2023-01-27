import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalItems: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const selectItem = state.products.find((prod) => {
        return prod.id == action.payload.id;
      });
      if (selectItem) {
        selectItem.quantity++;
        state.totalItems++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
        state.totalItems++;
      }
    },
    incrementQuantity: (state, action) => {
      state.products = state.products.map((prod) => {
        if (prod.id == action.payload) {
          prod.quantity++;
        }
        return prod;
      });
      state.totalItems++;
    },
    decrementQuantity: (state, action) => {
      const selectItem = state.products.find((prod) => {
        return prod.id == action.payload;
      });
      if (selectItem.quantity === 1) {
        state.products = state.products.filter((prod) => {
          return prod.id !== selectItem.id;
        });
        state.totalItems--;
      } else {
        selectItem.quantity--;
        state.totalItems--;
      }
    },
    calculateTotal: (state) => {
      state.totalAmount = state.products.reduce((accu, current) => {
        return (accu += current.price * current.quantity);
      }, 0);
    },
  },
});

export const {
  addItemToCart,
  incrementQuantity,
  decrementQuantity,
  calculateTotal,
} = cartSlice.actions;
export default cartSlice.reducer;
