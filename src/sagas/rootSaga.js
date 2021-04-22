import { all, call } from 'redux-saga/effects';

import { cartSaga } from './cartSaga';
import { categoriesSaga } from './categoriesSaga';
import { productSaga } from './productSaga';

function* rootSaga() {
  yield all([call(cartSaga), call(categoriesSaga), call(productSaga)]);
}

export default rootSaga;
