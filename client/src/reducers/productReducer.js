import { createSlice } from '@reduxjs/toolkit'
import {getProductsAction,  postAddtoCartAction} from '../actions/actionProducts';

const initialState = {
  productData: [],
  isProductLoading: false,
  cartItems: 0,
  isAddingToCart: false,
  isResponsiveDialogOpen: false, 
  cartData : [],
  groupedCartData : {},
  isSnackBarVisible: false
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
    },
    showMiniCart : (state, action) => {
      state.isResponsiveDialogOpen = true
    },
    hideMiniCart : (state, action) => {
      state.isResponsiveDialogOpen = false
    },

    // cart counter increaser
    increaseCounterInCart : (state, {payload}) => {
     let targetArray =  state.groupedCartData[payload]
     targetArray = [...targetArray, targetArray[0]]
     state.groupedCartData = {...state.groupedCartData, [payload] : targetArray}
     state.cartItems += 1
    }, 

    // cart counter decreaser
    decreaseCounterInCart  : (state, {payload}) => {
      let targetArray = [...state.groupedCartData[payload]]
      targetArray.splice(targetArray.length-1, 1)
        state.groupedCartData = {...state.groupedCartData, [payload] : targetArray}
        state.cartItems -= 1
    },

    toggleSnackBar: (state, action)=>{
      state.isSnackBarVisible = action.payload
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
      // find object by id and append it to new array
      state.isSnackBarVisible = true
      state.cartData = [state.productData.find((item)=> item.id === action?.meta?.arg?.productId), ...state.cartData]
      // group cartdata by id
      state.groupedCartData = state.cartData.reduce(function (r, a) {
        r[a.id] = r[a.id] || [];
        r[a.id].push(a);
        return r;
    }, Object.create(null));

      // increase card count by one
      state.cartItems += 1
      state.isAddingToCart = false
    }).addCase(postAddtoCartAction.pending, (state, action) => {
      state.isAddingToCart = true
    })
  },
})


export const { sortProductData, showMiniCart, hideMiniCart, increaseCounterInCart, decreaseCounterInCart, toggleSnackBar } = productReducer.actions


// Action creators are generated for each case reducer function

export default productReducer.reducer