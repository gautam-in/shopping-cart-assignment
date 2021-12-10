import { watchCategory } from "redux/modules/category";
import { watchBanners } from "redux/modules/banners";

import { all } from "redux-saga/effects";
import { watchProducts } from "redux/modules/products";

export default function* rootSaga() {
  yield all([watchCategory(), watchBanners(), watchProducts()]);
}
