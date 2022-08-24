import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  banners: [],
  categories: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    getBanners: (state, action) => {
      state.banners = action.payload;
    },
    getCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { getBanners, getCategories } = homeSlice.actions;
export default homeSlice.reducer;
