import { takeEvery, put } from "redux-saga/effects";
import cartActionTypes from "./cart-actiontypes";
import axios from "axios";

async function buyItemsAsync(product) {
  await axios({
    method: "post",
    url: "/addToCart",
    data: product,
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      throw new Error(err);
    });
}

export function* buyItemsRequest({ payload }) {
  console.log(payload);
  try {
    yield buyItemsAsync(payload);
    yield put({ type: cartActionTypes.ADD_CART, payload: payload });
  } catch (e) {
    yield put({ type: cartActionTypes.ERROR_CART, payload: e.message });
  }
}

export function* buyProducts() {
  yield takeEvery(cartActionTypes.BUY_ITEM, buyItemsRequest);
}
