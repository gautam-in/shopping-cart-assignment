import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: {
      id: '',
      category: {}
    }
  },
  reducers: {
    selectCategory: (state, action) => {
      state.value = {
        id: action.payload.id,
        category: action.payload
      }
    },
    unselectCategory: (state) => {
      state.value = {
        id: '',
        category: {}
      }
    }
  }
})

export const { selectCategory, unselectCategory } = categorySlice.actions

export const selectorCategoryId = (state) => state.category.value.id

export const selectorCategory = (state) => state.category.value.category

export default categorySlice.reducer
