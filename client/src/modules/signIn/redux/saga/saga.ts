import { SignIn } from "models/signIn";
import { put, takeLatest } from "redux-saga/effects";
import { LocalStorage } from "services/storage";
import { IFluxStandardAction } from "store/interfaces";
import { SignInActions } from "../actions/actions";
import { SIGNIN } from "../actions/actionTypes";

function* postSignInWorkerSaga({ payload }: IFluxStandardAction<SignIn>) {
  try {
    yield put(SignInActions.postSignInSuccess(payload.email));
    yield put(SignInActions.setUserStatus(true));
    yield LocalStorage.setStorage("user", payload.email);
    yield LocalStorage.setStorage("status", true);
  } catch (error) {
    yield put(SignInActions.postSignInError(error));
  }
}

export default function* signInWatcherSaga() {
  yield takeLatest(SIGNIN.POST.LOADING, postSignInWorkerSaga);
}
