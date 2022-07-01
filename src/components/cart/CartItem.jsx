import React from 'react'
import { QuantityButton } from '../index-components'

const CartItem = ({product}) => {
  return (
    <section className = "flex cart-item-wrapper bg-color">
        <img src = {product.imageURL} alt = { product.name } className = "cart-item-img"/>
        <div className = "flex cartItem-text-wrapper">
            <h3>{product.name}</h3>
            <div className = "flex cart-qty-wrapper">
                <div className = "flex qty-price-wrapper">
                    <QuantityButton product = {product}/>
                    <p> X {product.quantity * product.price}</p>
                </div>
                <p>RS.{product.quantity * product.price}</p>
            </div>
        </div>

    </section>
  )
}

export default CartItem