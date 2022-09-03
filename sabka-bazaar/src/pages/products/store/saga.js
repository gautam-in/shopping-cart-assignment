import { fetchCategoriesFromServer, fetchProductsFromServer } from "./api";
import { GET_PRODUCTS, GET_CATEGORIES } from "./types";
import {
  setProducts,
  setCategories,
  setCategoriesLoading,
  setProductsError,
  setProductsLoading,
  setCategoriesError,
} from "./slice";
import { call, put, takeLatest } from "redux-saga/effects";

function* handleProductsData() {
  try {
    const data = yield call(fetchProductsFromServer);
    yield put(setProducts(data));
  } catch (error) {
    yield put(setProductsError(error.message));
  } finally {
    yield put(setProductsLoading(false));
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

function* productsSaga() {
  yield takeLatest(GET_PRODUCTS, handleProductsData);
  yield takeLatest(GET_CATEGORIES, handleCategoriesData);
}

export default productsSaga;
