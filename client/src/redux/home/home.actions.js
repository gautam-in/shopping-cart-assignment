import HomeActionTypes from "./home.types";
import ApiRequestService from "../../services/api.service";
import { loaderEnd, loaderStart } from "../loader/loader.actions";

export const fetchHomepageBanner = () => async (dispatch) => {
  try {
    dispatch(loaderStart());
    const res = await ApiRequestService.getApi("banners");
    dispatch({
      type: HomeActionTypes.FETCH_HOME_PAGE_BANNER_SUCCESS,
      payload: res.data,
    });
    dispatch(loaderEnd());
  } catch (error) {
    dispatch(loaderEnd());
    dispatch({
      type: HomeActionTypes.FETCH_HOME_PAGE_BANNER_FAILURE,
      payload: error.message,
    });
  }
};

export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(loaderStart());
    const res = await ApiRequestService.getApi("categories");
    dispatch({
      type: HomeActionTypes.FETCH_CATEGORIES_SUCCESS,
      payload: res.data,
    });
    dispatch(loaderEnd());
  } catch (error) {
    dispatch(loaderEnd());
    dispatch({
      type: HomeActionTypes.FETCH_CATEGORIES_FAILURE,
      payload: error.message,
    });
  }
};

export const toggleCart = () => ({
  type: HomeActionTypes.TOGGLE_CART,
});
