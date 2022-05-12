import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isTablet: false,
    isMobile: false,
    showCart: false,
  },

  reducers: {
    setTabletView(state) {
      state.isTablet = true;
    },
    setMobileView(state) {
      state.isMobile = true;
    },
    setshowCart(state, action) {
      state.showCart = action.payload.show;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;