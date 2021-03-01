import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AddToCart from "./AddToCart"
import logo from '../images/logo.png'
import cart from '../images/cart.svg'

const HeaderComp = (props) => {
    const { cartItem, handleCount } = props;
    const [toggleCart, settoggleCart] = useState(false)
    const openAddtocart = (flag) => {
        settoggleCart(flag)
    }
    return (
        <div className="header">
            <div className="inner-header floatcontainer">
                <div className="logo-container">
                    <img src={logo} />
                </div>
                <ul className="navigation">
                    <li> <NavLink exact to="/" className="signInBar" activeClassName="selected" >Home</NavLink></li>
                    <li> <NavLink to="/product" className="signInBar" activeClassName="selected" >Product</NavLink></li>
                </ul>
                <div className="navigation-right">
                    <NavLink to="/login" className="signInBar" activeClassName="selected" >SignIn</NavLink>
                    <NavLink to="/ragister" className="registerBar" activeClassName="selected" >Register</NavLink>
                    <div className="cart-container" >
                        <span onClick={() => openAddtocart(true)}>
                            <img src={cart} alt="cart" />
                            {Array.isArray(cartItem) && cartItem.length} item
                        </span>
                        {
                            toggleCart && <>
                                <div className="cart-overlay"></div>
                                <AddToCart cartItem={cartItem} openAddtocart={openAddtocart} handleCount={handleCount} />
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HeaderComp;