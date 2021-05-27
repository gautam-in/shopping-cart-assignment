import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png';
import cart from '../../assets/cart.svg';
import { Link, withRouter } from 'react-router-dom';
import CartPopup from '../CartPopup';
import { connect } from 'react-redux';


function Header(props) {

    const [isActive, setActive] = useState(false);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyEvent);
        return () => {
            window.removeEventListener('keydown', handleKeyEvent);
        }
    }, [])

    const handleKeyEvent = (e) => {
        if(e.key === 'Escape' || e.key === 'Esc') {
            setActive(false);
        }
    }

    const closePopup = () => {
        setActive(false);
    }

    const openPopup = () => {
        setActive(true);
    }

    const openCart = () => {
        props.history.push('/cart');
    }

    return (
        <header>
            <section className="header-wrapper">
                <div className="logo">
                    <img src={logo} alt="Sabka Bazaar" />
                </div>
                <nav className="page-links">
                    <Link to="/">Home</Link>
                    <Link to="/products">Products</Link>
                </nav>
                <div className="tools-section">
                    <nav className="auth-links">
                        <Link to="/login">SignIn</Link>
                        <Link to="/register">Register</Link>
                    </nav>
                    <div className="cart-link" 
                    aria-label = "Open cart popup"
                    onClick = {openPopup}>
                        <img src={cart} alt="Cart" />
                        {props.totalItems} Items
                    </div>
                    <div className="cart-link-mobile" 
                    aria-label = "Open cart popup"
                    onClick = {openCart}>
                        <img src={cart} alt="Cart" />
                        {props.totalItems} Items
                    </div>
                </div>
            </section>
            {isActive && <CartPopup closePopup={closePopup} />}
        </header>
    )
}

const mapStateToProps = (state) => ({
    totalItems: [...state.cart.map(elem=>elem.quantity)].reduce((total, current) => {
        total+=current;
        return total;
    }, 0)
})

export default withRouter(connect(mapStateToProps, null)(Header));