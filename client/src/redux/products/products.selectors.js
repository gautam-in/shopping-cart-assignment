import { createSelector } from "reselect";

const selectProducts = (state) => state.products;

export const selectProductsList = (categoryId) =>
  createSelector([selectProducts], (productsList) =>
    categoryId
      ? productsList.products?.filter(
          (product) => product.category === categoryId
        )
      : productsList.products
  );
