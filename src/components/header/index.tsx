import React, { useContext, useCallback } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { HOME, PRODUCTS, LOGIN, REGISTER, CART } from '../../constants/routes';
import AppContext from '../../contexts/appContext/app-context';
import './index.scss';

const Header = () => {
    const {
        appState: { cartCount },
    } = useContext(AppContext);
    const history = useHistory();

    const handleRedirect = useCallback((route) => () => history.push(route), [history]);
    const isActiveLink = ({ isActive }) => (isActive ? 'active' : '');

    return (
        <header>
            <div className="navigation" role="navigation">
                <div className="d-flex align-items-center" onClick={handleRedirect(HOME)}>
                    <img src="static/images/logo.png" alt="logo" height="50" />
                </div>
                <nav>
                    <ul className="d-flex">
                        <NavLink exact={true} className={`navLink ${isActiveLink}`} to={HOME}>
                            Home
                        </NavLink>
                        <NavLink className={`navLink ${isActiveLink}`} to={PRODUCTS}>
                            Products
                        </NavLink>
                    </ul>
                </nav>
                <div className="cart-login-container">
                    <nav>
                        <ul className="list-h d-flex">
                            <NavLink className={`navLink ${isActiveLink}`} to={LOGIN}>
                                Sign In
                            </NavLink>
                            <NavLink className={`navLink ${isActiveLink}`} to={REGISTER}>
                                Register
                            </NavLink>
                        </ul>
                    </nav>
                    <button className="btn-cart" onClick={handleRedirect(CART)}>
                        <img src="static/images/cart.svg" alt="cart icon" className="icon" id="outside" />
                        <span className="cart-text" id="cart-items">
                            <span className="cart-count">{cartCount}</span> Items
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
