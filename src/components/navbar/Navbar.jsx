import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "../../styles/navbar/Navbar.css"
import logo from "./../../logo.png"
import  logoLarge from "./../../logo_2x.png"


import { useProducts } from '../../context/productContext'
import { clearFilters } from '../index-components'

const Navbar = () => {
    const { productState, isDesktopOrLaptop, dispatch } = useProducts()
    const { serverData, cartData } = productState
    const toggleCarModelView = () => {
        dispatch({type: "SET_CART_VIEW", payload: false})
    }
    const clearFilterHandler = clearFilters(dispatch, serverData)
  return (
    <header className = "header-nav-wrapper bg-color box-shadow">
        <nav className = "flex navbar-wrapper">
            <div className = "flex navbar-inner-first">
                <Link to = "/">
                    <img src = {logo} srcSet = {`${logo} 480w, ${logoLarge} 1080w`} sizes = "40vw" alt = "sabka bazar logo" className = "navbar-logo"/>
                </Link>
                <div className = "flex navbar-first-links">
                    <NavLink to = "/" className = "nav-links">Home</NavLink>
                    <NavLink to = "/products" className = "nav-links" onClick = {clearFilterHandler}>Products</NavLink>
                </div>
            </div>
            <div className = "flex navbar-inner-second">
                <div className = "flex navbar-authlinks-wrapper">
                    <NavLink to = "/login" className = "nav-links">SignIn</NavLink>
                    <NavLink to = "/signup" className = "nav-links">Register</NavLink>
                </div>
                <Link to = {`${isDesktopOrLaptop ? "/products/cart":"/cart"}`} className = "flex nav-cart-items" onClick = { toggleCarModelView } data-testid = "cart-link">
                    
                Cart:<span><b>{cartData.length < 2 ? `${cartData.length}  item` :  `${cartData.length}  items`}</b></span>
                </Link>
            </div>
         </nav>
    </header>
  )
}

export default Navbar
