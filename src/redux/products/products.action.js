import { ProductsActionType } from "./products.types";

export const setProductsCategory = (categoryId) => ({
  type: ProductsActionType.SET_PRODUCTS_CATEGORY,
  payload: categoryId,
});
