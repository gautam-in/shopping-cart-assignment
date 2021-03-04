import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AddToCart from "./AddToCart"
import { HEADER_LABEL_MESSAGE } from '../constant';
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
                    <img src={logo} alt="App Logo" />
                </div>
                <ul className="navigation">
                    <li> <NavLink exact to="/" role="button" className="signInBar" activeClassName="selected" >{HEADER_LABEL_MESSAGE.HEADER_LINK1}</NavLink></li>
                    <li> <NavLink to="/product" role="button" className="signInBar" activeClassName="selected" >{HEADER_LABEL_MESSAGE.HEADER_LINK2}</NavLink></li>
                </ul>
                <div className="navigation-right">
                    <NavLink to="/login" role="button" className="signInBar" activeClassName="selected" >{HEADER_LABEL_MESSAGE.HEADER_LINK3}</NavLink>
                    <NavLink to="/ragister" role="button" className="registerBar" activeClassName="selected" >{HEADER_LABEL_MESSAGE.HEADER_LINK4}</NavLink>
                    <div className="cart-container" >
                        <span role="button" tabIndex="0" onClick={() => openAddtocart(true)}>
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