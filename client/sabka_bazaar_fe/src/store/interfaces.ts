import { ICartState } from "pages/cart/redux/reducers/reducer";
import { IHomeState } from "pages/home/redux/reducers/reducer";
import { ILoginState } from "pages/login/redux/reducers/reducer";
import { IProductsState } from "pages/products/redux/reducers/reducer";
import { ISignUpState } from "pages/register/redux/reducers/reducer";

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
  products: IProductsState;
  cart: ICartState;
}
