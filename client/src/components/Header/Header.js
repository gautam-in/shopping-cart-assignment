import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <div className='image-container'>
          <img src='static/images/logo.png' alt="Sabka Bazaar logo" />
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
          <div className='cart-container'>
            <div className='cart-image-container'>
              <img src='static/images/cart.svg' alt="Sabka Bazaar logo" />
            </div>
            <div className='cart-text-container'>0 items</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
