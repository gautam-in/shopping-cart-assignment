import React from 'react';
import { useReducer, useEffect } from "react";

export const CartContext = React.createContext();

const previousCart = JSON.parse(localStorage.getItem('items'));

const defaultcartState = previousCart || {
  items: [],
  totalAmount: 0,
  totalItemsCount: 0
}
//cart reducer
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    //addition code
    const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingcartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingcartItem) {
      const updatedItem = {
        ...existingcartItem,
        amount: existingcartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    const totalItemsCount = updatedItems.map(item => item.amount).reduce((prev, next) => prev + next, 0);

    localStorage.setItem('items', JSON.stringify(updatedItems));
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalItemsCount: totalItemsCount
    }
  }
  if (action.type === 'REMOVE') {
    //remove code
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    const totalItemsCount = updatedItems.map(item => item.amount).reduce((prev, next) => prev + next, 0);
    localStorage.setItem('items', JSON.stringify(updatedItems));
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      totalItemsCount: totalItemsCount
    }
  }
  return defaultcartState;
}

//state provider
const CartProvider = (props) => {

  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultcartState);
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(cartState));
  }, [cartState])

  const addToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  }

  const removeFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    totalItemsCount: cartState.totalItemsCount,
    addItem: addToCartHandler,
    removeItem: removeFromCartHandler
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider;


