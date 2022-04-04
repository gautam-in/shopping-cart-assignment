import { put, takeLatest } from "redux-saga/effects";
import { fetchAPIData } from "../APIService";
import {
  CATEGORY_LIST,
  fetchCategoriesFailureAction,
  fetchCategoriesSuccessAction,
} from "./category.action";

function* fetchCategories() {
  try {
    const response = yield fetchAPIData(`categories`);
    yield put(fetchCategoriesSuccessAction(response.data));
  } catch (error) {
    yield put(fetchCategoriesFailureAction());
  }
}

export function* categorySaga() {
  yield takeLatest(CATEGORY_LIST, fetchCategories);
}
