import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  banners: [],
  categories: [],
  isBannersLoading: true,
  isCategoriesLoading: true,
  bannersError: "",
  categoriesError: "",
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setBanners: (state, action) => {
      state.banners = action.payload;
    },
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setCategoriesLoading: (state, action) => {
      state.isCategoriesLoading = action.payload;
    },
    setBannersLoading: (state, action) => {
      state.isBannersLoading = action.payload;
    },
    setBannersError: (state, action) => {
      state.bannersError = action.payload;
    },
    setCategoriesError: (state, action) => {
      state.categoriesError = action.payload;
    },
  },
});

export const {
  setBanners,
  setCategories,
  setBannersError,
  setBannersLoading,
  setCategoriesError,
  setCategoriesLoading,
} = homeSlice.actions;
export default homeSlice.reducer;
