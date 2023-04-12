import { createContext, useReducer, Dispatch } from "react"

import { addToCart, changeQuantity, removeItem } from "./cartActions"

import { CartState, CartAction, CartActionTypes } from "./models"

const initialState: CartState = { items: [], total: 0, itemCount: 0 }

export const CartContext = createContext<{
  state: CartState
  dispatch: Dispatch<any>
}>({ state: initialState, dispatch: () => null })

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      return addToCart(state, action)

    case CartActionTypes.CHANGE_QUANTITY:
      return changeQuantity(state, action)

    case CartActionTypes.REMOVE_ITEM:
      return removeItem(state, action)

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
