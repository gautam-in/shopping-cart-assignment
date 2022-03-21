import { all } from "redux-saga/effects";
import {
  getCategory,
  getOfferData,
  getProducts,
} from "./CategoryReducer/cate-sagas";
import { registerUser, userExists } from "./UserReducer/user-sagas";
import { buyProducts } from "./CartReducer/cart-sagas";

export default function* rootSaga() {
  yield all([
    userExists(),
    registerUser(),
    getCategory(),
    getOfferData(),
    getProducts(),
    buyProducts(),
  ]);
}
