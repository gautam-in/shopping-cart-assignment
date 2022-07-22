import { createSlice } from '@reduxjs/toolkit'
import {getBannersAction, getCategoriesAction} from '../actions/actionHome';

const initialState = {
  bannerData: [],
  bannerLoading: false,
	categoryData: [],
  categorySelected : null,
  categoryId: null
}

export const homeReducer = createSlice({
  name: 'home',
  initialState,
  reducers: {
    // changeCategory: (state, action) => {
    //   state.categorySelected = action.payload;
    // },
    changecategoryId: (state, action) => {
      state.categoryId = action.payload
      state.categorySelected = state.categoryData.filter((item)=>item.key===action.payload)[0]
    },
   
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
      state.categoryData = action.payload.filter((item)=>item.order>=0).sort((a,b)=> a.order - b.order)
      state.categoryLoading = false
      state.categorySelected = state.categoryData[0]
      state.categoryId = state.categoryData[0].id
    }).addCase(getCategoriesAction.pending, (state, action) => {
      // Add user to the state array
      state.categoryLoading = true
    })
  },
})


export const { changecategoryId} = homeReducer.actions

// Action creators are generated for each case reducer function

export default homeReducer.reducer