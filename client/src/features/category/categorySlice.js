import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: ''
  },
  reducers: {
    selectCategory: (state, action) => {
      state.value = action.payload
    },
    unselectCategory: (state) => {
      state.value = ''
    }
  }
})

export const { selectCategory, unselectCategory } = categorySlice.actions

export const selectorCategory = (state) => state.category.value

export default categorySlice.reducer
