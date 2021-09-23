import { SignUp } from "models/login";
import { put, takeLatest } from "redux-saga/effects";
import { LocalStorage } from "services/storage";
import { IFluxStandardAction } from "store/interfaces";
import { SignUpActions } from "../actions/actions";
import { SIGNUP } from "../actions/actionTypes";

function* postSignUpWorkerSaga({ payload }: IFluxStandardAction<SignUp>) {
  try {
    yield LocalStorage.setStorage("user", payload);
    yield put(SignUpActions.postSignUpSuccess(payload));
  } catch (error) {
    yield put(SignUpActions.postSignUpError(error));
  }
}

export default function* signUpWatcherSaga() {
  yield takeLatest(SIGNUP.POST.LOADING, postSignUpWorkerSaga);
}
