import React from 'react'
import "./Navbar.css"
// import "./Nav.scss"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"
export default function Navbar() {
    return (
        <div>
            <nav className="main">
                <img className="img-style" src={require("../../../static/images/logo.png").default} alt="Sabka Bazaar" />
                <ul className="links">
                    <li > <Link to="/" className="item1">Home</Link></li>
                    <li ><Link to="/products" className="item1">Products</Link></li></ul>
                <div className="container">
                <div className="divide1">
                    <div className="signin"><Link className="nocolor" to="/login">SignIn</Link></div>
                    <div className="register"><Link className="nocolor" to="/register">Register</Link></div>
                </div>
                <div className="divide2"><FontAwesomeIcon icon={faShoppingCart}/>0 Items</div>

                    </div>  
        

            </nav>
            <div className="line"></div></div>

    )
}
