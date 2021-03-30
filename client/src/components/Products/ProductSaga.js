import { takeLatest, put, all, call } from "redux-saga/effects";
import instance from "../../axios/axios";
import ProductActionTypes from "./ProductTypes";
import {
  getProductsSuccess,
  getProductsFailure,
  getAddToCartSuccess,
  getAddToCartFailure,
  incrementQtySuccess,
  decrementQtySuccess,
} from "./ProductActions";

// get products

export function* getProductsStart() {
  try {
    const response = yield instance.get("/products");
    const { data } = response;
    if (data) {
      yield put(getProductsSuccess(data));
    }
  } catch (error) {
    yield put(getProductsFailure(error));
  }
}

export function* getProducts() {
  yield takeLatest(ProductActionTypes.GET_PRODUCTS_START, getProductsStart);
}

// add to cart
export function* getAddToCartStart({ payload }) {
  try {
    const response = yield instance.post("/addToCart");
    const { data } = response;
    if (data) {
      yield put(getAddToCartSuccess(payload));
    }
  } catch (error) {
    yield put(getAddToCartFailure(error));
  }
}

export function* getAddToCart() {
  yield takeLatest(ProductActionTypes.GET_ADD_TO_CART_START, getAddToCartStart);
}

// increment quantity
export function* incrementQtyStart({ payload }) {
  yield put(incrementQtySuccess(payload));
}

export function* incrementQty() {
  yield takeLatest(ProductActionTypes.INCREMENT_QTY_START, incrementQtyStart);
}

// decrement quantity
export function* decrementQtyStart({ payload }) {
  yield put(decrementQtySuccess(payload));
}

export function* decrementQty() {
  yield takeLatest(ProductActionTypes.DECREMENT_QTY_START, decrementQtyStart);
}

export function* ProductSaga() {
  yield all([
    call(getProducts),
    call(getAddToCart),
    call(incrementQty),
    call(decrementQty),
  ]);
}
