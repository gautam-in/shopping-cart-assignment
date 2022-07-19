import axios from 'axios'
import React from 'react'
import { useProducts } from '../../context/productContext'

const QuantityButton = ( { product }) => {
    const { productState, dispatch } = useProducts()
    const { cartData } = productState
    const increment = qty => qty + 1
    const decrement = qty => qty - 1 
    const cartItem = cartData.find ((item) => item.id === product.id)
    const modifyCartQuantityHandler = updateCartQuantityHandler(cartItem, cartData, product, dispatch)
    
  return (
    <section className = "flex align-center qty-btn-wrapper" data-testid = "quantity-button">
        <button onClick = { () => modifyCartQuantityHandler(decrement, "decrement") } className = "qty-btn">-</button>
        <p data-testid = "qty-display">Qty: {cartItem?.quantity}</p>
        <button onClick = { () => modifyCartQuantityHandler (increment, "increment")} className = "qty-btn">+</button>
    </section>
  )
}

export default QuantityButton

function updateCartQuantityHandler(cartItem, cartData, product, dispatch) {
    return async (modifierFunction, modifier) => {
        try {
            const response = await axios.get("http://localhost:4000/addToCartJSON")
            if (response.data.response === "Success") {

                if (cartItem.quantity === 1 && modifier === "decrement") {
                    const decrementedCartData = cartData.filter((item) => item.id !== product.id)
                    dispatch({ type: "DECREMENT_CART_QTY", payload: decrementedCartData })
                }
                else {
                    const incrementedQuantityCartData = cartData.map((item => {
                        if (item.id === cartItem.id) {
                            return { ...cartItem, quantity: modifierFunction(cartItem.quantity) }
                        }
                        else {
                            return item
                        }
                    }))
                    dispatch({ type: "INCREMENT_CART_QTY", payload: incrementedQuantityCartData })
                }

            }

        } catch (e) {
            console.log(e)
        }
    }
}
