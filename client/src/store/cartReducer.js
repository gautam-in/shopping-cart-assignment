import { createSlice } from '@reduxjs/toolkit'

// Cart reducer.
export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    totalPrice: 0
  },
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload.item;
      const existing = state.cartItems.find((item) => item.id === newItem.id);
      if (!existing) {
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          imageURL: newItem.imageURL,
          totalItemPrice: newItem.price,
          name: newItem.name,
          stock: newItem.stock - 1,
        });
      }
      else {
        existing.quantity++;
        existing.stock--;
        existing.totalItemPrice = existing.quantity * existing.price
      }
      state.totalPrice += newItem.price;
    },
    reduceQuantity: (state, action) => {
      const productId = action.payload.id;
      const existingPoductIdIndex = state.cartItems.findIndex(
        (product) => product.id === productId
      );
      state.cartItems[existingPoductIdIndex].totalItemPrice -=
        state.cartItems[existingPoductIdIndex].price;

      if (state.cartItems[existingPoductIdIndex].quantity > 1) {
        state.cartItems[existingPoductIdIndex].quantity--;
        state.totalPrice -= state.cartItems[existingPoductIdIndex].price;
      } else {
        const finalCartItems = state.cartItems.filter(
          (item) => item.id !== productId
        );
        state.totalPrice -= state.cartItems[existingPoductIdIndex].price;
        state.cartItems = finalCartItems;
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, reduceQuantity } = cartSlice.actions
export default cartSlice