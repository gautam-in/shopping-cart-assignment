import { takeLatest } from "@redux-saga/core/effects";

import * as productData from "../pages/product/action";

export function* rootActions() {
  yield takeLatest("ADD_TO_CART_ITEM_DATA_ACTION", productData.addToCart);
}
