import { createSelector } from "reselect";

const selectLoader = (state) => state.loader;

export const selectIsLoading = createSelector(
  [selectLoader],
  (loader) => loader.isLoading
);
