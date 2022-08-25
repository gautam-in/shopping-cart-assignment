import { GET_PRODUCTS, GET_CATEGORIES } from "./types";

export const getProductsData = () => ({
  type: GET_PRODUCTS,
});

export const getCategoriesData = () => ({
  type: GET_CATEGORIES,
});
