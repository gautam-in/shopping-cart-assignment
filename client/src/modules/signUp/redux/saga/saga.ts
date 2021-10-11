import { SignUp } from "models/signIn";
import { SignInActions } from "modules/signIn/redux/actions/actions";
import { put, takeLatest } from "redux-saga/effects";
import { LocalStorage } from "services/storage";
import { IFluxStandardAction } from "store/interfaces";
import { SignUpActions } from "../actions/actions";
import { SIGNUP } from "../actions/actionTypes";

function* postSignUpWorkerSaga({ payload }: IFluxStandardAction<SignUp>) {
  try {
    yield put(SignUpActions.postSignUpSuccess(payload));
    yield put(SignInActions.setUserStatus(true));
    yield LocalStorage.setStorage("user", payload.email);
    yield LocalStorage.setStorage("status", true);
  } catch (error) {
    yield put(SignUpActions.postSignUpError(error));
  }
}

export default function* signUpWatcherSaga() {
  yield takeLatest(SIGNUP.POST.LOADING, postSignUpWorkerSaga);
}
