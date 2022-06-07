import { CATEGORIES_ACTION } from "./categories.types";
import { createAction } from "../../../utils/reducer/reducer.util";

export const fetchCaregoriesStart = () =>
  createAction(CATEGORIES_ACTION.SET_CATEGORIES_START);

export const fetchCaregoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION.SET_CATEGORIES_SUCCESS, categoriesArray);

export const fetchCaregoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION.SET_CATEGORIES_FAILED, error);

export const setActiveCategory = (categoryId) =>
  createAction(CATEGORIES_ACTION.SET_ACTIVE_CATEGORY, categoryId);
