import React from 'react'
import {useCartContext} from './CartContext'

const reducer = (state, action) => {
  switch (action.type) {
    case 'COMPLETE':
      return
    default:
      return state
  }
}

const CartReducer = () => {
  const {cartItems, setCartItems} = useCartContext()
  const [_, dispatch] = useReducer(reducer, cartItems)

  return <div>CartReducer</div>
}

export default CartReducer
