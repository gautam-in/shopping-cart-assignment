import { createSelector } from "reselect";

const selectHome = (state) => state.home;

export const selectIsLoading = createSelector(
  [selectHome],
  (home) => home.isLoading
);

export const selectBanners = createSelector(
  [selectHome],
  (home) => home.banners
);

export const selectCategories = createSelector(
  [selectHome],
  (home) => home.categories
);

export const selectActiveCategories = (categoryId) =>
  createSelector([selectHome], (home) =>
    home.categories?.filter((category) => category.id === categoryId)
  );

export const selectCartHidden = createSelector(
  [selectHome],
  (home) => !home.hidden
);
