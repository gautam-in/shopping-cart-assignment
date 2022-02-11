import React from "react";
import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: {},
  totalAmount: 0,
  totalItems: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const existingCartItem = state.items[action.item.id];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = { ...state.items };
      updatedItems[action.item.id] = updatedItem;
    } else {
      updatedItems = { ...state.items };
      updatedItems[action.item.id] = { ...action.item, amount: 1 };
    }

    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const updatedTotalItems = state.totalItems + action.item.amount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalItems: updatedTotalItems,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItem = state.items[action.item.id];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    const updatedTotalItems = state.totalItems - 1;

    let updatedItems;
    if (existingCartItem.amount === 1) {
      const existingcpy = { ...state.items };
      updatedItems = delete existingcpy[action.item.id] && existingcpy;
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };

      updatedItems = { ...state.items };
      updatedItems[action.item.id] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalItems: updatedTotalItems,
    };
  }
  if (action.type === "CLEAR") {
    return defaultCartState;
  }
  return defaultCartState;
};

function CartProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (item) => {
    dispatchCartAction({ type: "REMOVE", item: item });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: "CLEAR" });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalItems: cartState.totalItems,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
