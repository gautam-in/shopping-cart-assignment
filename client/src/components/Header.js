import React from 'react'

import './Header.css'
import {NavLink} from 'react-router-dom'

function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <img className="logo" src="logo.png" alt="Sabka Bazar" />
        <nav className="nav">
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/Products">Products</NavLink>
        </nav>

        <NavLink to="/Cart" className="cart-header">0 items</NavLink>

        <div className="log-reg">
          <NavLink to="/Login">Login</NavLink>
          <NavLink to="/Signup" className="test">Register</NavLink>
        </div>
      </header>
    </div>
  )
}

export default Header