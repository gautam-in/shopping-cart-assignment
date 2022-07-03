import { SignUp } from "models/login";
import { createSelector, Selector } from "reselect";
import { IState } from "store/interfaces";
import { ISignUpError, ISignUpLoading, ISignUpState } from "../reducers/reducer";

const signUpSelect = (state: IState): ISignUpState => state.signUp;

const selectUser: Selector<IState, SignUp> = createSelector(signUpSelect, (signUp) => signUp.user);

const selectLoading: Selector<IState, ISignUpLoading> = createSelector(signUpSelect, (signUp) => signUp.loading);

const selectError: Selector<IState, ISignUpError> = createSelector(signUpSelect, (signUp) => signUp.error);

export const SignUpSelectors = { selectUser, selectLoading, selectError };
