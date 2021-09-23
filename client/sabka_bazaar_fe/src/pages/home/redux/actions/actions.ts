import { BannerList, CategoryList } from "models/home";
import { IFluxStandardAction } from "store/interfaces";
import { BANNER, CATEGORY } from "./actionTypes";

const getBanners = () => {
  return {
    type: BANNER.GET.LOADING
  };
};

const getBannersSuccess = (payload: BannerList): IFluxStandardAction<BannerList> => {
  return {
    type: BANNER.GET.SUCCESS,
    payload
  };
};
const getBannersError = (error: string): IFluxStandardAction<string> => {
  return {
    type: BANNER.GET.ERROR,
    payload: error
  };
};

const getCategories = () => {
  return {
    type: CATEGORY.GET.LOADING
  };
};

const getCategoriesSuccess = (payload: CategoryList): IFluxStandardAction<CategoryList> => {
  return {
    type: CATEGORY.GET.SUCCESS,
    payload
  };
};
const getCategoriesError = (error: string): IFluxStandardAction<string> => {
  return {
    type: CATEGORY.GET.ERROR,
    payload: error
  };
};

export const HomeActions = { getBanners, getBannersSuccess, getBannersError, getCategories, getCategoriesSuccess, getCategoriesError };
