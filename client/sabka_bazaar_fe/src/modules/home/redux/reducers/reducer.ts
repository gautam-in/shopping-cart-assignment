import { BannerList, CategoryList } from "models/home";
import { BANNER, CATEGORY } from "../actions/actionTypes";

export interface IHomeLoading {
  getCategories: boolean;
  getBanners: boolean;
}

export interface IHomeError {
  getCategories: string;
  getBanners: string;
}

export interface IHomeState {
  getCategoriesData: CategoryList;
  getBannersData: BannerList;
  error: IHomeError;
  loading: IHomeLoading;
}

export const homeInitialState: IHomeState = {
  getCategoriesData: {
    categories: []
  },
  getBannersData: {
    banners: []
  },
  error: { getCategories: "", getBanners: "" },
  loading: { getCategories: false, getBanners: false }
};

const homeReducer = (state = homeInitialState, action: { payload: any; type: string }): IHomeState => {
  switch (action.type) {
    case BANNER.GET.LOADING:
      return { ...state, loading: { ...state.loading, getBanners: true }, error: { ...state.error, getBanners: null } };
    case BANNER.GET.SUCCESS:
      return { ...state, loading: { ...state.loading, getBanners: false }, getBannersData: { ...state.getBannersData, banners: action.payload } };
    case BANNER.GET.ERROR:
      return { ...state, loading: { ...state.loading, getBanners: false }, error: { ...state.error } };
    case CATEGORY.GET.LOADING:
      return { ...state, loading: { ...state.loading, getCategories: true }, error: { ...state.error, getCategories: null } };
    case CATEGORY.GET.SUCCESS:
      return { ...state, loading: { ...state.loading, getCategories: false }, getCategoriesData: { ...state.getCategoriesData, categories: action.payload } };
    case CATEGORY.GET.ERROR:
      return { ...state, loading: { ...state.loading, getCategories: false }, error: { ...state.error } };
    default:
      return state;
  }
};
export default homeReducer;
