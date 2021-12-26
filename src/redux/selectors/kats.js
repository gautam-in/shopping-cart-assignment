import { createSelector } from "reselect";

const selectKats = (state) => state.kats;

export const selectKatsKittens = createSelector(
  [selectKats],
  (kats) => kats.Categories
);
