import React, { useReducer } from "react"

import { CartState, CartAction, CartActionTypes } from "./models"

const initialState: any = { items: [], total: 0 }

export const CartContext = React.createContext(initialState)

function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      if (state.items.some((cartItem) => cartItem.id === action.payload.id)) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity++ }
              : item
          ),
          total: state.total + action.payload.price,
        }
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
        total: state.total + action.payload.price,
      }

    case CartActionTypes.CHANGE_QUANTITY:
      const foundItem = state.items.find(
        (item) => item.id === action.payload.product.id
      )

      return foundItem?.quantity === 1 && action.payload.delta === -1
        ? {
            ...state,
            items: state.items.filter(
              (item) => item.id !== action.payload.product.id
            ),
            total: state.total - action.payload.product.price,
          }
        : {
            ...state,
            items: state.items.map((item) =>
              item.id === action.payload.product.id
                ? { ...item, quantity: item.quantity + action.payload.delta }
                : item
            ),
            total:
              state.total + action.payload.product.price * action.payload.delta,
          }

    case CartActionTypes.REMOVE_ITEM:
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload.id)],
        total: state.total - action.payload.price,
      }
    default:
      return state
  }
}

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}
