import { createSlice } from '@reduxjs/toolkit';
import { getProductFilteredByProductId } from '../../services/ApiService';

const initialState = {
  products: [],
  cartPrice: 0,
  cartQuantity: 0,
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    currentState: (state = initialState, action) => {
      return {
        ...state,
        isOpen: action.payload,
      };
    },
    setCartPrice: (state = initialState, action) => {
      return {
        ...state,
        cartPrice: action.payload,
      };
    },
    setCartQuantity: (state = initialState, action) => {
      return {
        ...state,
        cartQuantity: action.payload,
      };
    },
    addProductToCart: (state = initialState, action) => {
      state.products.push(action.payload);
    },
    removeProductFromCart: (state = initialState, action) => {
      state.products.splice(
        state.products.findIndex((products) => products.id === action.payload),
        1
      );
    },
  },
  extraReducers: {
    [getProductFilteredByProductId.pending]: (state, action) => {
      state.status = 'loading';
    },
    [getProductFilteredByProductId.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
    [getProductFilteredByProductId.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  currentState,
  addProductToCart,
  removeProductFromCart,
  setCartPrice,
  setCartQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
