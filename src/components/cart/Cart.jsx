import React from 'react'
import { useProducts } from '../../context/productContext'
import { CartItem } from "./../index-components"
import "./Cart.css"
import priceLabel from "./../../lowest-price.png"
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const { productState, isDesktopOrLaptop, dispatch } = useProducts()
  const { cartData } = productState
  const navigate = useNavigate()
  const totalPrice = cartData.reduce((prev, curr) => prev + (curr.price * curr.quantity), 0)
  const modelToggleHandler = () => {
    dispatch({type: "SET_CART_VIEW", payload: true})
    navigate("/products")
  }

  return (
    <section className = {`${isDesktopOrLaptop? "bg-color cart-wrapper" :""}`}>
        <div className = "flex cart-header-wrapper">
          <h2 className = "cart-title bg-color">My Cart <span className = "cart-title-small">[{cartData.length === 1 ? `${cartData.length}item` : `${cartData.length}items`}]</span></h2>
          {isDesktopOrLaptop && <button onClick = { modelToggleHandler } className = "close-btn">Close</button>}
        </div>
        <div className = {`flex cart-items-wrapper ${isDesktopOrLaptop ? "singleItem-wrapper" :""}`}>
          {
            cartData.map((product) => {
              return <CartItem product = { product } key = {product.id}/>
            })
          }
        </div>
        <div className = "flex price-banner-wrapper bg-color">
          <img src = {priceLabel} alt = "least price guaranteed" />
          <p>You won't find it cheaper anywhere</p>
        </div>
        <div className =  {`bg-color ${isDesktopOrLaptop ? "checkout-text-wrapper":"checkout-text-wrapper"}`}>
          <p>Promo code can be applied on payment page</p>
          <button className = "flex cart-checkout-btn btn-color">
            <span>Proceed to Checkout</span>
            <span>Rs.{totalPrice} &gt;</span>
          </button>
        </div>
    </section>
  )
}

export default Cart