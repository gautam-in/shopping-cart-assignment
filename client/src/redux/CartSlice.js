import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: []
  },
  reducers: {
    increment: (state, action) => {
        state.products.map((product) => {
            if(product.id == action.payload.id)
            {
               product.quantity += 1;
            }
        });
    },
    decrement: (state,action) => {
        state.products.map((product) => {
            if(product.id == action.payload.id)
            {
               product.quantity -= 1;
            }
        });
    },
    add: (state, action) => {
        let stateFilter = false;
        state.products.map((product) => {
            if(product.id == action.payload.id)
            {
               stateFilter = true;
               product.quantity += 1;
            }
        });
        if(!stateFilter)
        {
            state.products.push(action.payload);
        }
        
      },
  },
})

export const { increment, decrement, add } = CartSlice.actions

export default CartSlice.reducer