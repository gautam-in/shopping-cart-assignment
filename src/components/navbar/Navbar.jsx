import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "./../../logo.png"
import { useProducts } from '../../context/productContext'
const Navbar = () => {
    const { productState, dispatch } = useProducts()
    const { serverData } = productState
  return (
    <header className = "header-nav-wrapper">
        <nav className = "navbar-wrapper">
        <div className = "navbar-inner-first">
            <img src = {logo} alt = "sabka bazar logo" className = "navbar-logo"/>
            <div className = "navbar-first-links">
                <NavLink to = "/" className = "nav-links">Home</NavLink>
                <NavLink to = "/products" className = "nav-links" onClick = {() => dispatch({ type: "SET_PRODUCTS_DATA", payload: serverData })}>Products</NavLink>
            </div>
        </div>
        <div className = "navbar-inner-second">
            <div className = "navbar-authlinks-wrapper">
                <NavLink to = "/login" className = "nav-links">SignIn</NavLink>
                <NavLink to = "/signup" className = "nav-links">Register</NavLink>
            </div>
            <Link to = "" className = "nav-cart-items">
                <i className = "fa-solid fa-cart-shopping navbar-cart-logo"></i>
                <span>Items</span>
            </Link>
        </div>
    </nav>
    </header>
  )
}

export default Navbar
