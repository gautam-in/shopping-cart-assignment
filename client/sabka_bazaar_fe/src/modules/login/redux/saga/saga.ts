import { Login } from "models/login";
import { LoginActions } from "modules/login/redux/actions/actions";
import { LOGIN } from "modules/login/redux/actions/actionTypes";
import { call, put, takeLatest } from "redux-saga/effects";
import { LoginRepository } from "repositories/login/login";
import { LocalStorage } from "services/storage";
import { IFluxStandardAction } from "store/interfaces";

function* postLoginWorkerSaga({ payload }: IFluxStandardAction<Login>) {
  try {
    yield LocalStorage.setStorage("user", payload.email);
    yield put(LoginActions.postLoginSuccess(payload.email));
  } catch (error) {
    yield put(LoginActions.postLoginError(error));
  }
}

export default function* loginWatcherSaga() {
  yield takeLatest(LOGIN.POST.LOADING, postLoginWorkerSaga);
}
