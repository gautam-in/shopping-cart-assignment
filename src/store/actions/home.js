import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";

export const fetchBannersSuccess = (banners) => {
  return {
    type: actionTypes.FETCH_BANNERS_SUCCESS,
    banners: banners,
  };
};

export const fetchBannersFail = (error) => {
  return {
    type: actionTypes.FETCH_BANNERS_FAIL,
    error: error,
  };
};

export const fetchBannersStart = () => {
  return {
    type: actionTypes.FETCH_BANNERS_START,
  };
};
export const fetchCategoriesSuccess = (categories) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_SUCCESS,
    categories: categories,
  };
};

export const fetchCategoriesFail = (error) => {
  return {
    type: actionTypes.FETCH_CATEGORIES_FAIL,
    error: error,
  };
};

export const fetchCategoriesStart = () => {
  return {
    type: actionTypes.FETCH_CATEGORIES_START,
  };
};
export const selectCategorySet = (id, name) => {
  return {
    type: actionTypes.SELECT_CATEGORY_SET,
    categoryId: id,
    categoryName: name,
  };
};

export const fetchBanners = () => {
  return (dispatch) => {
    dispatch(fetchBannersStart());
    axios
      .get("/banners")
      .then((res) => {
        dispatch(fetchBannersSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchBannersFail(err));
      });
  };
};

export const fetchCategories = () => {
  return (dispatch) => {
    dispatch(fetchCategoriesStart());
    axios
      .get("/categories")
      .then((res) => {
        const resData = res.data;
        const obj = {
          name: "All Categories",
          key: "all Categories",
          description: "All Categories ",
          enabled: true,
          order: 0,
          imageUrl: "",
          id: "all",
        };
        resData.push(obj);
        resData.sort((a, b) =>
          a.order > b.order ? 1 : b.order > a.order ? -1 : 0
        );
        dispatch(fetchCategoriesSuccess(resData));
      })
      .catch((err) => {
        dispatch(fetchCategoriesFail(err));
      });
  };
};
export const selectCategory = (id, name) => {
  return (dispatch) => {
    dispatch(selectCategorySet(id, name));
  };
};
