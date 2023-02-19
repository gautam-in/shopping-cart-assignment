import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  offers: []
};

export const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {
    setOffers: (state, action) => {
      state.offers = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOffers } = offerSlice.actions;

export default offerSlice.reducer;
