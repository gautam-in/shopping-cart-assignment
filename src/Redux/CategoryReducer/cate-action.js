import categoryTypes from "./cate-actiontypes";

export const setCategoryId = (id) => ({
  type: categoryTypes.CATEGORY_ID,
  payload: id,
});

export const getCategories = () => ({
  type: categoryTypes.GET_CATEGORY,
});

export const getBannerOffers = () => ({
  type: categoryTypes.GET_OFFERS,
});

export const getProducts = () => ({
  type: categoryTypes.GET_PRODUCTS,
});
