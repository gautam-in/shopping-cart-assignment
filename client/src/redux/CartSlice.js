import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: []
  },
  reducers: {
    increment: (state, action) => {
        let selectedItem = state.products.find((product) => product.id === action.payload.id);
        if(selectedItem){
            selectedItem.quantity += 1;
        }
    },
    decrement: (state,action) => {
        let selectedItem = state.products.find((product) => product.id === action.payload.id);
        if(selectedItem){
            selectedItem.quantity -= 1;
            if(selectedItem.quantity <= 0){
              state.products = state.products.filter((product) => product.id !== action.payload.id);
            }
        }
    },
    add: (state, action) => {
        let selectedItem = state.products.find((product) => product.id === action.payload.id);
        if(selectedItem){
            selectedItem.quantity += 1;
            return;
        }
        state.products = [...state.products,action.payload];
        
      },
  },
})

export const { increment, decrement, add } = CartSlice.actions

export default CartSlice.reducer