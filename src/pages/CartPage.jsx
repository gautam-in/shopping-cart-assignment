import React from 'react'
import { Cart, Navbar } from "../components/index-components"
import { useProducts } from '../context/productContext'

const CartPage = () => {
  const { isDesktopOrLaptop } = useProducts
  return (
    <div>
      { !isDesktopOrLaptop && <Navbar />}
      <Cart />
    </div>
  )
}

export default CartPage