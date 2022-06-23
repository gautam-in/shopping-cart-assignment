import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './index.css'
import { MiniCart } from "../MiniCart";
import { ModalOverlay } from "../ModalOverlay";
import { IconButton } from "@mui/material";
import { useSelector } from 'react-redux'
export const Header = (props) => {
    const [isShowCart, setIsShowCart] = useState(false);
    const cartProducts = useSelector(state => state.productCarts)
    const handleCartClose = () => {
        console.log("clicked")
        setIsShowCart(false);
    }
    const handleCartClick = () => {
        setIsShowCart(true);
    }
    return (
        <div className="header-container">
            <div className="header-content-wrapper">
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
                        <div className="products-cart-container">
                            <div className="products-cart-container-content" ><div className="products-cart-icon-items" onClick={handleCartClick}><span><ShoppingCartIcon /></span> <span>{cartProducts.length} {cartProducts.length === 0 || cartProducts.length === 1 ? "item" : "items"}</span></div>
                                {isShowCart && <MiniCart handleCartClose={handleCartClose} />}
                            </div>
                            {isShowCart && <ModalOverlay><div className={"overlay"} /></ModalOverlay>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}