import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: {
      totalCount: 0,
      totalAmount: 0,
      products: {}
    }
  },
  reducers: {
    addToCart: (state, action) => {
      let totalCount = state.value.totalCount + 1
      let totalAmount = state.value.totalAmount + action.payload.price
      let productId = action.payload.id
      let productCount = (state.value.products[productId]
                          && state.value.products[productId].count)
                          || 0
      productCount = productCount + 1
      let products = {
        ...state.value.products,
        [productId]: {
          ...action.payload,
          count: productCount,
          subTotal: productCount * action.payload.price
        }
      }
      let newState = {
        products,
        totalCount,
        totalAmount
      }

      state.value = newState
    },
    removeFromCart: (state, action) => {
      let totalCount = state.value.totalCount - 1
      totalCount = totalCount > 0 ? totalCount : 0
      let totalAmount = state.value.totalAmount - action.payload.price
      totalAmount = totalAmount > 0 ? totalAmount : 0
      let productId = action.payload.id
      let productCount = (state.value.products[productId]
                          && state.value.products[productId].count)
                          || 0
      productCount = productCount - 1
      let products;

      if (productCount > 0) {
        products = {
          ...state.value.products,
          [productId]: {
            ...action.payload,
            count: productCount,
            subTotal: productCount * action.payload.price
          }
        }
      } else {
        products = {
          ...state.value.products
        }
        delete products[productId]
      }
      let newState = {
        products,
        totalCount,
        totalAmount,
      }

      state.value = newState
    }
  }
})

export const { addToCart, removeFromCart } = cartSlice.actions

export const selectorCart = (state) => state.cart.value

export const selectorCartTotalCount = (state) => {
  return state.cart.value.totalCount
}

export const selectorCartTotalAmount = (state) => {
  return state.cart.value.totalAmount
}

export const selectorCartProducts = (state) => {
  return state.cart.value.products
}

export default cartSlice.reducer
