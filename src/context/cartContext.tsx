import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useReducer,
} from "react";

import { TProduct } from "../apis/products";

const initialState = {
  cart: [] as TProduct[],
};

type TCart = typeof initialState;

export const CartContext = createContext<ICartProvider | null>(null);

interface ICartProvider {
  state: TCart;
  dispatch: Dispatch<any>;
}
export function CartContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext) as ICartProvider;
}

function cartReducer(state: any, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
