import { fetchCategoriesFromServer, fetchProductsFromServer } from "./api";
import { GET_PRODUCTS, GET_CATEGORIES } from "./types";
import { getProducts, getCategories, setCategoriesLoading } from "./slice";
import { call, put, takeLatest } from "redux-saga/effects";

function* handleProductsData() {
  try {
    const data = yield call(fetchProductsFromServer);
    yield put(getProducts(data));
    yield put(setCategoriesLoading(false));
  } catch (error) {
    yield put(setCategoriesLoading(false));
    console.log("er : ", error);
  }
}
function* handleCategoriesData() {
  try {
    const data = yield call(fetchCategoriesFromServer);
    yield put(getCategories(data));
  } catch (error) {
    console.log("er : ", error);
  }
}

function* productsSaga() {
  yield takeLatest(GET_PRODUCTS, handleProductsData);
  yield takeLatest(GET_CATEGORIES, handleCategoriesData);
}

export default productsSaga;
