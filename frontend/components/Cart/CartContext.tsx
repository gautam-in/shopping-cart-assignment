import React, {useState} from 'react'
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
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  cartItems: initialState,
  isOpen: false,
  dispatch: () => null,
  setIsOpen: () => null,
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
  let [isOpen, setIsOpen] = useState(false)

  return (
    <CartContext.Provider value={{cartItems, dispatch, isOpen, setIsOpen}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return React.useContext(CartContext)
}
