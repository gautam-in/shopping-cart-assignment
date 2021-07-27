import { IHomeState } from "modules/home/redux/reducers/reducer";
import { ILoginState } from "modules/login/redux/reducers/reducer";
import { ISignUpState } from "modules/register/redux/reducers/reducer";

export interface IFluxStandardAction<Payload = undefined, Meta = undefined, Error = string> {
  type: string;
  payload?: Payload;
  error?: Error;
  meta?: Meta;
  visible?: boolean;
}
export interface IState {
  login: ILoginState;
  signUp: ISignUpState;
  home: IHomeState;
}
