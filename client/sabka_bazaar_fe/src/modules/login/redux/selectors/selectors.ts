import { Login } from "models/login";
import { ILoginError, ILoginLoading, ILoginState } from "modules/login/redux/reducers/reducer";
import { createSelector, Selector } from "reselect";
import { IState } from "store/interfaces";

const loginSelect = (state: IState): ILoginState => state.login;

const selectLogin: Selector<IState, Login> = createSelector(loginSelect, (login) => login.login);

const selectLoading: Selector<IState, ILoginLoading> = createSelector(loginSelect, (login) => login.loading);

const selectError: Selector<IState, ILoginError> = createSelector(loginSelect, (login) => login.error);

export const LoginSelectors = { selectLogin, selectLoading, selectError };
