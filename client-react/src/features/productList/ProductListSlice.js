import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  productList: [],
  error: '',
  filteredList: []
}

// Generates pending, fulfilled and rejected action types
export const fetchProductList = createAsyncThunk('fetchProduct', () => {
  return axios
    .get('http://127.0.0.1:5500/server/products/index.get.json')
    .then(response => response.data)
})

const productListSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getFilteredData(state, action) {
      return {
        ...state,
      filteredList : [...state.productList].filter(item => item.category === action.payload)
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProductList.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchProductList.fulfilled, (state, action) => {
      state.loading = false
      state.productList = action.payload
      state.filteredList = action.payload
      state.error = ''
    })
    builder.addCase(fetchProductList.rejected, (state, action) => {
      state.loading = false
      state.productList = []
      state.filteredList = []
      state.error = action.error.message
    })
  }
})

export default productListSlice.reducer
export const { getFilteredData } = productListSlice.actions