import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  banners: [],
  categories: [],
  categoryId: "",
  categoryName: "",
  loading: false,
};

const fetchBannersStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchBannersSuccess = (state, action) => {
  return updateObject(state, {
    banners: action.banners,
    loading: false,
  });
};

const fetchBannersFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchCategoriesStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchCategoriesSuccess = (state, action) => {
  return updateObject(state, {
    categories: action.categories,
    loading: false,
  });
};

const fetchCategoriesFail = (state, action) => {
  return updateObject(state, { loading: false });
};
const selectCategorySet = (state, action) => {
  return updateObject(state, {
    categoryId: action.categoryId,
    categoryName: action.categoryName,
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORIES_START:
      return fetchCategoriesStart(state, action);
    case actionTypes.FETCH_CATEGORIES_SUCCESS:
      return fetchCategoriesSuccess(state, action);
    case actionTypes.FETCH_CATEGORIES_FAIL:
      return fetchCategoriesFail(state, action);
    case actionTypes.FETCH_BANNERS_START:
      return fetchBannersStart(state, action);
    case actionTypes.FETCH_BANNERS_SUCCESS:
      return fetchBannersSuccess(state, action);
    case actionTypes.FETCH_BANNERS_FAIL:
      return fetchBannersFail(state, action);
    case actionTypes.SELECT_CATEGORY_SET:
      return selectCategorySet(state, action);
    default:
      return state;
  }
};

export default reducer;
