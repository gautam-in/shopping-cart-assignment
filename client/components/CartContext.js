import React from 'react'

const CartContext = React.createContext()

function countReducer(state, action) {
  const { type, data } = action
  switch (type) {
    case 'ADD': {
       const newItem =  data.item
       const alreadyAddedItems = state.cartItems
       const isAlreadyAdded = alreadyAddedItems.some(item=>item.id === newItem.id)
       let updatedItems = []
       if(isAlreadyAdded) {
        updatedItems = alreadyAddedItems.map(item => {
            if(item.id == newItem.id) {
                return {...item, quantity: item.quantity + 1}
            }
            return item;
        })
       } else {
        updatedItems= [...alreadyAddedItems, {...newItem, quantity: 1}]
       } 
      return { ...state, cartItems: updatedItems}
    }
    case 'REMOVE': {
      return {...state, cartItems: state.cartItems.filter(item => item.id != data.item.id)}
    }
    case 'CART_OPEN_STATE': {
      return { ...state, cartOpenState: data.cartOpenState}
    }
    default: {
      throw new Error(`Unsupported action type: ${action.type}`)
    }
  }
}

function CartProvider(props) {
  const [state, dispatch] = React.useReducer(countReducer, {cartItems: [], cartOpenState: false})
  const value = React.useMemo(() => [state, dispatch], [state])
  return <CartContext.Provider value={value} {...props} />
}

function useCart() {
  const context = React.useContext(CartContext)
  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`)
  }
  const [state, dispatch] = context
  return {
    state,
    dispatch,
  }
}

export {CartProvider, useCart}