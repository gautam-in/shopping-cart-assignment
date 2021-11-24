import { useReducer, useEffect } from "react";
import { cartReducer } from "./CartContext";
import { initialcartState } from "./CartContext";
import { CartContext } from "./CartContext";

export const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialcartState
  );
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(cartState));
  }, [cartState]);

  const addToCart = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeFromCart = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalItemsCount: cartState.totalItemsCount,
    addItem: addToCart,
    removeItem: removeFromCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
