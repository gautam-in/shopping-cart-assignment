import { createSlice } from '@reduxjs/toolkit'
import {getProductsAction,  postAddtoCartAction} from '../actions/actionProducts';

const initialState = {
  productData: [],
  isProductLoading: false,
  cartItems: 0,
  isAddingToCart: false,
  
}

export const productReducer = createSlice({
  name: 'product',
  initialState,
  reducers: {
    sortProductData : (state, action) => {
     let filteredData  = state.productData.filter((item)=> item.category === action.payload
      )
      let unFilteredData = state.productData.filter((item)=> item.category !== action.payload
      )
      state.productData = [...filteredData,...unFilteredData]
    }
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getProductsAction.fulfilled, (state, action) => {
      state.isProductLoading = false
      state.productData = action.payload
    }).addCase(getProductsAction.pending, (state, action) => {
      state.isProductLoading = true
    })

    builder.addCase(postAddtoCartAction.fulfilled, (state, action) => {


      // add item to cart


      state.cartItems += 1
      state.isAddingToCart = false
    }).addCase(postAddtoCartAction.pending, (state, action) => {
      state.isAddingToCart = true
    })


  },
})


export const { sortProductData } = productReducer.actions


// Action creators are generated for each case reducer function

export default productReducer.reducer