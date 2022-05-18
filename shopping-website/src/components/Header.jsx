import React from 'react';
import "./Header.scss";
import logo from '../assets/images/logo.png';
import cartIcon from '../assets/images/cart.svg';
import { Link, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectCartCount, selectCartIsOpen } from '../store/cart/cart.selector';
import Cart from './Cart';
import { setCartToggle } from '../store/cart/cart.action';
import Footer from './Footer';

const Header = () => {

    const cartIsOpen = useSelector(selectCartIsOpen);
    const cartCount = useSelector(selectCartCount);
    const dispatch = useDispatch();
    const cartToggleHandler = () => {
        dispatch(setCartToggle());
    }


    return (
        <header className='header'>
            <section className='auth'>
                <ul>
                <Link to="/signin" style={{textDecoration: 'none', marginRight:'10px'}}>Sign In  </Link>
                <Link to="/register" style={{textDecoration: 'none'}}>Register</Link>
                </ul>
            </section>
        <section className='navbar'>
            <div className='logo'>
                <img src={logo} />
            </div>
            <nav>
                <ul>
                <Link to="/" style={{textDecoration: 'none', marginRight:'10px'}}>Home  </Link>
                <Link to="/products/All" style={{textDecoration: 'none'}}>Products</Link>
                </ul>
            </nav>
            <div className='cart' onClick={cartToggleHandler}>
                <img src={cartIcon} />
                <span style={{color:'rgb(234, 70, 124)', fontWeight:'bold'}}>   {cartCount} Items</span>
            </div>
        </section>
        {cartIsOpen && <Cart />}
        <Outlet />
        <Footer />
        </header>
    )

}

export default Header;