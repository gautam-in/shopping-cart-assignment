import { all, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import { fetchCategories } from "../api/categories";
import { fetchProducts, fetchProductsById } from "../api/products";
import { GET_CATEGORIES, GET_PRODUCTS } from "../constants";

function* getCategories() {
  try {
    const categories = yield fetchCategories();

    yield put(actions.getCategoriesSuccess(categories.data));
  } catch (e) {
    yield put(actions.getCategoriesFail());
  }
}

function* getProducts(actionPayload) {
  try {
    const products = actionPayload.payload
      ? yield fetchProductsById(actionPayload.payload)
      : yield fetchProducts();
    yield put(actions.getProductsSuccess(products.data));
  } catch (e) {
    yield put(actions.getProductsFail());
  }
}

export default function* () {
  yield all([
    takeLatest(GET_CATEGORIES, getCategories),
    takeLatest(GET_PRODUCTS, getProducts),
  ]);
}
