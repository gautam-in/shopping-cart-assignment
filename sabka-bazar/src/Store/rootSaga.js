import { all } from "redux-saga/effects";
import { bannersSaga } from "./Banner/banner.saga";
import { categorySaga } from "./Category/category.saga";
import { productSaga } from "./Products/products.saga";

export default function* rootSaga() {
  yield all([bannersSaga(), categorySaga(), productSaga()]);
}
