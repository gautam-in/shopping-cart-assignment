import React from 'react'

import './Header.css'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div class="header-container">
      <header class="header">
        <img class="logo" src="logo.png" alt="Sabka Bazar" />
        <nav class="nav">
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Products">Products</NavLink>
        </nav>

        <NavLink to="/Cart" class="cart-header">0 items</NavLink>

        <div class="log-reg">
          <NavLink to="/Login">Login</NavLink>
          <NavLink to="/Signup" class="test">Register</NavLink>
        </div>
      </header>
    </div>
  )
}

export default Header