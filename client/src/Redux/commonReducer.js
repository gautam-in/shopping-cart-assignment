import { createSlice } from "@reduxjs/toolkit";

const commonMethods = createSlice({
  name: "commonBox",
  initialState: {
    cartStatus: false,
  },

  reducers: {
    accessCart: (state, action) => {
      state.cartStatus = action.payload;
    },
  },
});

export const { accessCart } = commonMethods.actions;

export const commonMethodsReducer = commonMethods.reducer;
