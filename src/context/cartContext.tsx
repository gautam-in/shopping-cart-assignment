import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from "react";

import { TProduct } from "../apis/products";

const initialState = {
  cart: [] as (TProduct & { qty: number })[],
};

type TCart = typeof initialState;

export const CartContext = createContext<ICartProvider | null>(null);

interface ICartProvider {
  state: TCart;
  dispatch: Dispatch<any>;
}
export function CartContextProvider({ children }: PropsWithChildren) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log({ state });

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
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c: any) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
}
