import { all, call } from "redux-saga/effects";

import { userSaga } from "./slices/user/user.saga";
import { categoriesSage } from "./slices/categories/categories.saga";
import { productsSaga } from "./slices/products/products.saga";

export function* rootSaga() {
  yield all([call(userSaga), call(productsSaga), call(categoriesSage)]);
}
