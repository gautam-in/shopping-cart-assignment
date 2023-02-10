import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentProductCategory: '',
    productList: { loading: false, data: [], error: false },
    productCategories: { loading: false, data: [], error: false },
    productBanners: { loading: false, data: [], error: false },
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        handleCurrentProductCategory: (state, action) => {
            let category = state.currentProductCategory ? (state.currentProductCategory === action.payload ? '' : action.payload) : action.payload
            state.currentProductCategory = category
        }
    },
});

export const {
    handleCurrentProductCategory
  } = productSlice.actions;

export default productSlice.reducer;
