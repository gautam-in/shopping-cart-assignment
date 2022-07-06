import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "./../../logo.png"
import logoLarge from "./../../logo_2x.png"


import { useProducts } from '../../context/productContext'

const Navbar = () => {
    const { productState, isDesktopOrLaptop, dispatch } = useProducts()
    const { serverData, cartData } = productState
    const toggleCarModelView = () => {
        dispatch({type: "SET_CART_VIEW", payload: false})
    }
  return (
    <header className = "header-nav-wrapper bg-color box-shadow">
        <nav className = "navbar-wrapper">
        <div className = "navbar-inner-first">
            <Link to = "/">
                <img src = {isDesktopOrLaptop ? logoLarge : logo} alt = "sabka bazar logo" className = "navbar-logo"/>
            </Link>
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
            <Link to = {`${isDesktopOrLaptop ? "/products/cart":"/cart"}`} className = "nav-cart-items" onClick = { toggleCarModelView }>
                <i className = "fa-solid fa-cart-shopping navbar-cart-logo"></i>
                <span><b>{cartData.length < 2 ? `${cartData.length}  item` :  `${cartData.length}  items`}</b></span>
            </Link>
        </div>
    </nav>
    </header>
  )
}

export default Navbar
