import { all, call } from 'redux-saga/effects';

import homeSagas from './Home/sagas';
import cartSagas from './Cart/sagas';
import userSagas from './User/sagas';
import productsSagas from './Products/sagas';

export default function* rootSaga() {
  yield all([
    call(homeSagas),
    call(cartSagas),
    call(userSagas),
    call(productsSagas)
  ]);
}