import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './index.css'
export const Header = (props) => {
    const [selectedItems,setSelectedItems]=useState(0);
    return (
        <div className="header-container">
            <div className="header-image-box"><img className="header-image-icon" src="/static/images/logo.png" /></div>
            <div className="header-navigation-content-container">
                <div className="signin-signup-container">
                    <Link className="singin-link link" to='/signin'>SignIn</Link>
                    <Link className="signup-link link" to='/signup'>Register</Link>
                </div>
                <div className="home-products-link-cart-container">
                    <div className="home-products-link-container">
                        <Link className="home-link link" to={'/'}>Home</Link>
                        <Link className="products-link link" to={'/products'}>Products</Link>
                    </div>
                    <div className="products-cart-container"><ShoppingCartIcon /> {selectedItems} items</div>
                </div>
            </div>
        </div>
    )
}