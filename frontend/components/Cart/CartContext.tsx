import React from 'react'

const CartContext = React.createContext([])

interface Props {
  children?: JSX.Element | JSX.Element[]
}

const reducer = (state, action) => {
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
  const [cartItems, dispatch] = React.useReducer(reducer, {products: []})
  return (
    <CartContext.Provider value={{cartItems, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export function useCartContext() {
  return React.useContext(CartContext)
}
