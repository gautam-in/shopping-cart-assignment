import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

let cartSlice = createSlice({
  name: "ProductCart",

  initialState: {
    cartItems: [],
    totalCartPrice: 0,
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

      state.totalCartPrice = state.cartItems.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );

      toast.success(newProduct.productName + " added to Cart!", {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
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

      state.totalCartPrice = state.cartItems.reduce(
        (sum, item) => sum + item.totalPrice,
        0
      );

      toast.info(existingProduct.productName + " removed from Cart!", {
        position: "bottom-right",
        autoClose: 1600,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    },

    replaceCart(state, action) {
      state.cartItems = action.payload;
    },
  },
});

export const CartActions = cartSlice.actions;

export default cartSlice.reducer;
