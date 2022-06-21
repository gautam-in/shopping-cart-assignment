import { createSlice } from '@reduxjs/toolkit'
import {getProductsAction} from '../actions/actionProducts';

const initialState = {
  productData: [],
  isProductLoading: false
}

export const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getProductsAction.fulfilled, (state, action) => {
      // Add user to the state array
      state.isProductLoading = false
      state.productData = action.payload
    }).addCase(getProductsAction.pending, (state, action) => {
      // Add user to the state array
      state.isProductLoading = true
    })

  },
})

// Action creators are generated for each case reducer function

export default productReducer.reducer