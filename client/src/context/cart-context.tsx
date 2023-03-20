import React, { useReducer } from "react"

import { CartItem, CartState, CartAction, CartActionTypes } from "./models"

const initialState: any = { items: [], total: 0 } //CartState

export const CartContext = React.createContext(initialState)

function cartReducer(state: CartState, action: CartAction) {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      const updatedItems = [...state.items]
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === action.payload.id
      )

      if (updatedItemIndex < 0) {
        updatedItems.push({ ...action.payload, quantity: 1 })
      } else {
        const updatedItem = {
          ...updatedItems[updatedItemIndex],
        }
        updatedItem.quantity++
        updatedItems[updatedItemIndex] = updatedItem
      }
      return {
        ...state,
        items: [...updatedItems],
        total: state.total + action.payload.price,
      }

    case CartActionTypes.CHANGE_QUANTITY:
      return {
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
