import { all, call } from "redux-saga/effects";
import { BannerSaga } from "../components/Banner/BannerSaga";
import { LoginSaga } from "../containers/Login/LoginSaga";
import { ProductSaga } from "../containers/Products/ProductSaga";

export default function* rootSaga() {
  yield all([call(ProductSaga), call(BannerSaga), call(LoginSaga)]);
}
