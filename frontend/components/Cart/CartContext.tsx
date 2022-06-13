import React from 'react'
import {Product} from 'typings'

interface Props {
  children?: JSX.Element | JSX.Element[]
}

interface CartState {
  products: Product[]
}

const initialState = {products: []}

const CartContext = React.createContext<{
  cartItems: CartState
  dispatch: React.Dispatch<any>
}>({
  cartItems: initialState,
  dispatch: () => null,
})

type ACTIONTYPE =
  | {type: 'ADD'; payload: Product}
  | {type: 'REMOVE'; payload: Product}
  | {type: 'CHANGE_QUANTITY'; payload: Product}

const reducer = (state: {products: any[]}, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        products: [...state.products, {...action.payload, qty: 1}],
      }

    case 'REMOVE':
      return {
        ...state,
        products: state.products.filter(c => c.id !== action.payload.id),
      }

    case 'CHANGE_QUANTITY':
      console.log(`change quanity called`)
      return {
        ...state,
        products: state.products.filter(c =>
          c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty,
        ),
      }
    default:
      return state
  }
}

export function CartWrapper({children}: Props) {
  const [cartItems, dispatch] = React.useReducer(reducer, initialState)
  return (
    <CartContext.Provider value={{cartItems, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return React.useContext(CartContext)
}
