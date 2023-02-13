import { createContext, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";

export const CartContext = createContext(null);
export const CartDispatchContext = createContext(null);

const initialCartState = {
  items: {},
  totalCartPrice: 0,
  totalItems: 0,
  showCartSideBar: false,
};

export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}
