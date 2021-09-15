import { createSlice } from "@reduxjs/toolkit";

const productListCart = createSlice({
  name: "productBox",
  initialState: {
    productListData: [],
  },

  reducers: {
    accessProductDataList: (state, action) => {
      state.productListData = action.payload;
    },
  },
});

export const { accessProductDataList } = productListCart.actions;

export const productList = productListCart.reducer;
