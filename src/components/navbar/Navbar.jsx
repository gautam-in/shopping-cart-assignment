import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "./../../logo.png"
import  logoLarge from "./../../logo_2x.png"


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
                <img src = {logo} srcSet = {`${logo} 480w, ${logoLarge} 1080w`} sizes = "40vw" alt = "sabka bazar logo" className = "navbar-logo"/>

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
            <Link to = {`${isDesktopOrLaptop ? "/products/cart":"/cart"}`} className = "nav-cart-items" onClick = { toggleCarModelView } data-testid = "cart-link">
                
            Cart:<span><b>{cartData.length < 2 ? `${cartData.length}  item` :  `${cartData.length}  items`}</b></span>
            </Link>
        </div>
    </nav>
    </header>
  )
}

export default Navbar
