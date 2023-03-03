import { createSlice } from "@reduxjs/toolkit";
import { ActionInterface, OfferReducerInterface } from "./interface";

const initialState: OfferReducerInterface = {
  offers: []
};

export const offerSlice = createSlice({
  name: "offer",
  initialState,
  reducers: {
    setOffers: (state:OfferReducerInterface, action:ActionInterface) => {
      state.offers = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOffers } = offerSlice.actions;

export default offerSlice.reducer;
