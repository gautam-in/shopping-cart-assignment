import { ProductItem } from "models/products";
import { call, put, takeLatest } from "redux-saga/effects";
import { CartRepository } from "repositories/cart";
import { IFluxStandardAction } from "store/interfaces";
import { CartActions } from "../actions/actions";
import { CART } from "../actions/actionTypes";

function* postCartWorkerSaga({ payload }: IFluxStandardAction<ProductItem>) {
  try {
    yield call(CartRepository.postItemToCart, payload);
    yield put(CartActions.addToCartSuccess(payload));
  } catch (error) {
    yield put(CartActions.addToCartError(error));
  }
}

export default function* cartWatcherSaga() {
  yield takeLatest(CART.POST.LOADING, postCartWorkerSaga);
}
