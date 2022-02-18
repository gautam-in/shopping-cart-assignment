import { put, select } from "redux-saga/effects";
import * as selector from "./selector";

export function* addToCart(params) {
  try {
    if (params.action === "update") {
      yield put({
        type: "ADD_TO_CART_ITEM_DATA",
        data: params.itemSelected,
      });
    } else {
      const items = [...(yield select(selector.itemSelected))];
      items.push(params.itemSelected);
      yield put({
        type: "ADD_TO_CART_ITEM_DATA",
        data: items,
      });
    }
  } catch (e) {
    console.log(e);
  }
}
