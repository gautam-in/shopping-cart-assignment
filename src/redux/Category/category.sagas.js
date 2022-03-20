import { takeLatest, put } from "redux-saga/effects";
import axios from "axios";

import {
  fetchCategoryDataFailure,
  fetchCategoryDataSuccess,
} from "./category.actions";
import CategoryActionTypes from "./category.types";

function* getCategoryList() {
  try {
    const response = yield axios
      .get("http://localhost:5000/categories")
      .then((response) => Promise.resolve(response));
    const data = response.data.filter((data) => data.enabled === true);

    yield put(fetchCategoryDataSuccess(data));
  } catch (error) {
    yield put(fetchCategoryDataFailure());
  }
}

export function* fetchCategoryData() {
  yield takeLatest(CategoryActionTypes.Fetch_CATEGORY_LIST, getCategoryList);
}
