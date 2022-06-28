import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import NavbarCss from "./Navbar.css"
import logo from "./../../logo.png"
import cartlogo from "./../../cart.svg"
const Navbar = () => {
  return (
    <header className = "header-nav-wrapper">
        <nav className = "navbar-wrapper">
        <div className = "navbar-inner-first">
            <img src = {logo} alt = "sabka bazar logo" className = "navbar-logo"/>
            <div className = "navbar-first-links">
                <NavLink to = "/home">Home</NavLink>
                <NavLink to = "/products">Products</NavLink>
            </div>
        </div>
        <div className = "navbar-inner-second">
            <div className = "navbar-authlinks-wrapper">
                <Link to = "/login">SignIn</Link>
                <Link to = "/signup">Register</Link>
            </div>
            <NavLink to = "" className = "nav-cart-items">
                <img src = { cartlogo } alt = "cart logo" className = "navbar-cart-logo"/>
                <span>Items</span>
            </NavLink>
        </div>
    </nav>
    </header>
  )
}

export default Navbar
