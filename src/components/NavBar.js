import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import classes from '../css/nav.css';
import { Link, useHistory } from 'react-router-dom';

import Brand from '../../public/static/images/logo.png';
import CartLogo from '../../public/static/images/cart.svg';

import Cart from './Cart';
import CartContext from '../Context/CartContext';

const NavBar = () => {

    const [cartIsVisible, setCartIsVisible] = useState(false);
    const { cart } = useContext(CartContext);

    const history = useHistory();

    const calculateCartItems = () => {
        let cartItems = 0;
        cart.forEach(item => {
            cartItems += item.quantity
        });
        return cartItems;
    }

    const showCart = () => {
        setCartIsVisible(!cartIsVisible);
    }

    const handleBrandClick = () => {
        history.push('/home')
    }

    return (
        <nav className={classes.NavBar}>
            <section className={classes['nav-container']}>
                <article className={classes.navLeft} >
                    <img src={Brand} alt="Sabka Bazaar logo" onClick={handleBrandClick} />
                </article>

                <article className={classes.navCenter}>
                    <Link to="/home">Home</Link>
                    <Link to="/products">Products</Link>
                </article>

                <article className={classes.navRight}>
                    <div className={classes['nav-links']}>
                        <Link to="/login">SignIn</Link>
                        <Link to="/signup">Register</Link>
                    </div>
                    <button className={classes.cart} onClick={showCart}>
                        <img className={classes.cartIcon} alt="Cart Icon" src={CartLogo} />
                        <span>{calculateCartItems()} items</span>
                    </button>
                </article>
            </section>
            { ReactDOM.createPortal(
                <section className={cartIsVisible ? classes.backdrop : classes['close-cart']}>
                    <article className={cartIsVisible ? classes['cart-modal'] : `${classes['cart-modal']} ${classes['close-cart']}`}>
                        <Cart showCart={showCart} />
                    </article>
                </section>,
                document.getElementById('app-portal')
            )}
        </nav>
    )
}

export default NavBar;