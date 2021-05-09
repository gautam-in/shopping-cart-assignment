import React from 'react'
import "./Navbar.css"
// import "./Nav.scss"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import {useSelector} from "react-redux"
import Logo from "../../../static/images/logo.png"
export default function Navbar() {
    const cartItems=useSelector(state=>state.cartItems)
    debugger
    return (
        <div>
            <nav className="main">
                <img className="img-style" src={Logo} alt="Sabka Bazaar" />
                <ul className="links">
                    <li key="1"> <Link to="/" className="item1">Home</Link></li>
                    <li key="2"><Link to="/products" className="item1">Products</Link></li></ul>
                <div className="container">
                <div className="divide1">
                    <div className="signin"><Link className="nocolor" to="/login">SignIn</Link></div>
                    <div className="register"><Link className="nocolor" to="/register">Register</Link></div>
                </div>
                <div className="divide2"><FontAwesomeIcon icon={faShoppingCart}/>({cartItems.length}) Items</div>

                    </div>  
        

            </nav>
            <div className="line"></div></div>

    )
}
