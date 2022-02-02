import { all, fork } from "redux-saga/effects";

import userSagas from "./userSaga";
import catalogSagas from "./catalogSaga";
import productsSaga from "./productsSaga";
import cartSaga from "./cartSaga";
import authSaga from "./authSaga";

export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(userSagas);
  yield fork(catalogSagas);
  yield fork(productsSaga);
  yield fork(cartSaga);
}

// Try this also ::
// export default function* () {
//   yield all([
//       yield fork(userSagas)
//       yield fork(cartSagas)
//   ]);
// }
