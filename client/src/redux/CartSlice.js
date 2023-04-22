import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: []
  },
  reducers: {
    increment: (state, action) => {
        return state.products.map((product) => {
            if(product.id === action.payload.id)
            {
               product.quantity += 1;
            }
            return product;
        });
    },
    decrement: (state,action) => {
        return state.products.map((product) => {
            if(product.id === action.payload.id)
            {
               product.quantity -= 1;
            }
            return product;
        });
    },
    add: (state, action) => {
        let stateFilter = false;
         state.products.map((product) => {
            if(product.id === action.payload.id)
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