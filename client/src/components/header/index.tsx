// FIXME: FIX
import React, { useContext } from 'react';
import { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { HOME, PRODUCTS, LOGIN, REGISTER } from '../../constants/routes';
import AppContext from '../../contexts/appContext/app-context';
import Cart from '../cart';
import './index.scss';

const Header = () => {
    const {
        appState: { cartCount },
    } = useContext(AppContext);
    const [openCart, setOpenCart] = useState(false);
    const history = useHistory();

    const handleRedirect = useCallback((route) => () => history.push(route), [history]);

    const toggleCart = useCallback(() => setOpenCart(!openCart), [openCart]);

    return (
        <header>
            <div className="navigation" role="navigation">
                <div className="d-flex align-items-center" onClick={handleRedirect(HOME)}>
                    <img src="static/images/logo.png" alt="logo" height="50" />
                </div>
                <nav>
                    <ul className="d-flex">
                        <li>
                            <button onClick={handleRedirect(HOME)}>Home</button>
                        </li>
                        <li>
                            <button onClick={handleRedirect(PRODUCTS)}>Products</button>
                        </li>
                    </ul>
                </nav>
                <div className="cart-login-container">
                    <nav>
                        <ul className="list-h d-flex">
                            <li className="link">
                                <button onClick={handleRedirect(LOGIN)}>Sign In</button>
                            </li>
                            <li className="link">
                                <button onClick={handleRedirect(REGISTER)}>Register</button>
                            </li>
                        </ul>
                    </nav>
                    <button className="btn-cart" onClick={toggleCart}>
                        <img src="static/images/cart.svg" alt="cart icon" className="icon" id="outside" />
                        <span className="text" id="cart-items">
                            {cartCount} Items
                        </span>
                    </button>
                    <div id="desktop-cart" className="cart-main-cont" style={{ display: openCart ? 'block' : 'none' }}>
                        <Cart closeCart={toggleCart} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
