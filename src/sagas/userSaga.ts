import { put, all, takeLatest } from 'redux-saga/effects';
import { getUser as fetchUser } from '../api/user';
import {
  GET_USER,
  GET_USER_FAIL
} from '../constants';
import * as actions from '../actions';



function* getUser() {
  try {
    const user = yield fetchUser();

    yield put(actions.getUserSuccess(user.data));
  } catch(e) {
    yield put(actions.getUserFail(GET_USER_FAIL));
  }
}

export default function*() {
    yield all([
      takeLatest(GET_USER, getUser)
    ]);
  }
  