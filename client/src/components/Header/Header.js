import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectorCartTotalCount } from '../../features/cart/cartSlice'
import Cart from '../Cart/Cart'
import './Header.css'

function Header() {
  const [showCart, setShowCart]= useState(false)
  const cartTotalCount = useSelector(selectorCartTotalCount)
  const toggleCart = () => {
    setShowCart(!showCart)
  }

  return (
    <div className='header'>
      <div className='container'>
        <div className='image-container'>
          <Link to="/">
            <img src='static/images/logo.png' alt="Sabka Bazaar logo" />
          </Link>
        </div>
        <nav className='nav-container'>
          <Link to="/home">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
        <div className='cart-signup-container'>
          <div className='signup-container'>
            <Link to="/login">Signin</Link>
            <Link to="/signup">Register</Link>
          </div>
          <div className='cart-container' onClick={toggleCart}>
            <div className='cart-image-container'>
              <img src='static/images/cart.svg' alt="Sabka Bazaar logo" />
            </div>
            <div className='cart-text-container'>{cartTotalCount} items</div>
          </div>
        </div>
      </div>
      <div className={`cart-popup ${showCart ? 'show' : ''}`} >
        <Cart onClose={setShowCart} />
      </div>
    </div>
  )
}

export default Header
