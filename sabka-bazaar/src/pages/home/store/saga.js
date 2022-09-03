import { fetchBannersFromServer, fetchCategoriesFromServer } from "./api";
import { GET_BANNERS, GET_CATEGORIES } from "./types";
import {
  setBanners,
  setCategories,
  setBannersLoading,
  setCategoriesLoading,
  setBannersError,
  setCategoriesError,
} from "./slice";
import { call, put, takeLatest } from "redux-saga/effects";

function* handleBannersData() {
  try {
    const data = yield call(fetchBannersFromServer);
    yield put(setBanners(data));
  } catch (error) {
    yield put(setBannersError(error.message));
  } finally {
    yield put(setBannersLoading(false));
  }
}
function* handleCategoriesData() {
  try {
    const data = yield call(fetchCategoriesFromServer);
    yield put(setCategories(data));
  } catch (error) {
    yield put(setCategoriesError(error.message));
  } finally {
    yield put(setCategoriesLoading(false));
  }
}

function* homeSaga() {
  yield takeLatest(GET_BANNERS, handleBannersData);
  yield takeLatest(GET_CATEGORIES, handleCategoriesData);
}

export default homeSaga;
