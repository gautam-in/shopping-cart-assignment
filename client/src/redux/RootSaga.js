import { all, call } from "redux-saga/effects";
import { BannerSaga } from "../components/Banner/BannerSaga";
import { LoginSaga } from "../components/Login/LoginSaga";
import { ProductSaga } from "../components/Products/ProductSaga";

export default function* rootSaga() {
  yield all([call(ProductSaga), call(BannerSaga), call(LoginSaga)]);
}
