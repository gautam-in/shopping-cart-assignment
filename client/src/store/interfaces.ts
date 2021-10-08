import { IHomeState } from "modules/home/redux/reducers/reducer";
import { IProductsState } from "modules/products/redux/reducers/reducer";
import { ISignInState } from "modules/signIn/redux/reducers/reducer";
import { ISignUpState } from "modules/signUp/redux/reducers/reducer";

export interface IFluxStandardAction<Payload = undefined, Meta = undefined, Error = string> {
  type: string;
  payload?: Payload;
  error?: Error;
  meta?: Meta;
  visible?: boolean;
}
export interface IState {
  signIn: ISignInState;
  signUp: ISignUpState;
  home: IHomeState;
  products: IProductsState;
}
