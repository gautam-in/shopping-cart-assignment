import { createSlice } from '@reduxjs/toolkit'
import {getBannersAction, getCategoriesAction} from '../actions/actionHome';

const initialState = {
  bannerData: [],
  bannerLoading: false,
	categoryData: []
}

export const homeReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getBannersAction.fulfilled, (state, action) => {
      // Add user to the state array
      state.bannerData = action.payload
      state.bannerLoading = false
    }).addCase(getBannersAction.pending, (state, action) => {
      // Add user to the state array
      state.bannerLoading = true
    })

		builder.addCase(getCategoriesAction.fulfilled, (state, action) => {
      // Add user to the state array
      state.categoryData = action.payload
      state.categoryLoading = false
    }).addCase(getCategoriesAction.pending, (state, action) => {
      // Add user to the state array
      state.categoryLoading = true
    })
  },
})

// Action creators are generated for each case reducer function

export default homeReducer.reducer