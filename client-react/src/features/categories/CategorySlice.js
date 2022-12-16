import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  categoryList: [],
  error: ''
}

// Generates pending, fulfilled and rejected action types
export const fetchCategoryList = createAsyncThunk('fetchCategory', () => {
  return axios
    .get('http://127.0.0.1:5502/server/categories/index.get.json')
    .then(response => response.data)
})

const categorySlice = createSlice({
  name: 'category',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCategoryList.pending, state => {
      state.loading = true
    })
    builder.addCase(fetchCategoryList.fulfilled, (state, action) => {
      state.loading = false
      state.categoryList = action.payload
      state.error = ''
    })
    builder.addCase(fetchCategoryList.rejected, (state, action) => {
      state.loading = false
      state.categoryList = []
      state.error = action.error.message
    })
  }
})

export default categorySlice.reducer
