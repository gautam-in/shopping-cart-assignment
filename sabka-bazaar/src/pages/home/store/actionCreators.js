import { GET_BANNERS, GET_CATEGORIES } from "./types";

export const getCarouselData = () => ({
  type: GET_BANNERS,
});

export const getCategoriesData = () => ({
  type: GET_CATEGORIES,
});
