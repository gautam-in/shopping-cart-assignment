import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useReducer,
  useState,
} from "react";

import { TProduct } from "../apis/products";
import { cartReducer, TAction } from "../reducers/cartReducer";

const initialState = {
  cart: [] as (TProduct & { quantity: number })[],
};

export type TCart = typeof initialState;

interface ICartProvider {
  state: TCart;
  dispatch: Dispatch<TAction>;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const CartContext = createContext<ICartProvider | null>(null);

export function CartContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CartContext.Provider value={{ state, dispatch, isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  return useContext(CartContext) as ICartProvider;
}
