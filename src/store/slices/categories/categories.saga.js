import { call, all, takeLatest, put } from "redux-saga/effects";
import { getCategories } from "../../../utils/api.data";
import {
  fetchCaregoriesFailed,
  fetchCaregoriesSuccess,
} from "./categories.action";
import { CATEGORIES_ACTION } from "./categories.types";

export function* fetchCategories() {
  try {
    const categoriesArray = yield call(getCategories);
    yield put(fetchCaregoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCaregoriesFailed(error));
  }
}

export function* onCategoriesStart() {
  yield takeLatest(CATEGORIES_ACTION.SET_CATEGORIES_START, fetchCategories);
}

export function* categoriesSage() {
  yield all([call(onCategoriesStart)]);
}
