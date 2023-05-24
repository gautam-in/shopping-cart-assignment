import {
  createContext,
  useReducer,
  Dispatch,
  ReactNode,
  FunctionComponent,
} from "react";

import { addToCart, updateQuantity, removeFromCart } from "./CartActions";
import { CartStateType, CartAction, CartActionTypes } from "../types";

const initialState: CartStateType = {
  items: [],
  total: 0,
  itemCount: 0,
};

export const CartContext = createContext<{
  state: CartStateType;
  dispatch: Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const cartReducer = (
  state: CartStateType,
  action: CartAction
): CartStateType => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return addToCart(state, action);

    case CartActionTypes.UPDATE_QUANTITY:
      return updateQuantity(state, action);

    case CartActionTypes.REMOVE_ITEM:
      return removeFromCart(state, action);

    default:
      return state;
  }
};

export const CartContextProvider: FunctionComponent<{
  children: ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
