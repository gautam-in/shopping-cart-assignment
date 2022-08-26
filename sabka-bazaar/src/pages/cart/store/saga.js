import { postCartItemToServer } from "./api";
import { ADD_TO_CART } from "./types";
import { addToCartLoading, addToCartSuccess, addToCartError } from "./slice";
import { call, put, takeLatest } from "redux-saga/effects";

function* handleCartData(action) {
  try {
    const response = yield call(postCartItemToServer(action.payload));
    if (response) {
      yield put(addToCartSuccess(true));
      yield put(addToCartLoading(false));
    }
  } catch (error) {
    yield put(addToCartError(error.code));
    yield put(addToCartLoading(false));
    console.log("er : ", error);
  }
}

function* cartSaga() {
  yield takeLatest(ADD_TO_CART, handleCartData);
}

export default cartSaga;
