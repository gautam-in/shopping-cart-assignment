import React, { useState, useEffect } from 'react';
import logo from '../images/sabka_bazaar.png';
import CartModal from './CartModal'
import cartUrl from '../images/cart.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../CSS/NavigationComp.css'

const NavigationComp = () => {
    const cart = useSelector(state => state.cart);
    const [showModal, setShowModal] = useState(false);
    const totalItems = cart.cart.reduce((acc, curr) => (
        acc + curr.quantity
    ),0)

    return <>
        <header className='header'>
            <div className='header_logo'><img src={logo} alt="logo" /></div>
            <div className='header_group1'>
                <Link to="/">Home</Link>
                <Link to="/products">Products</Link>
            </div>
            <div className='header_group2'>
                <div className='header_login'>
                    <Link to="/signin">SignIn</Link>
                    <Link to="/register">Register</Link>
                </div>
                <div className='header_cart' onClick={() => setShowModal(!showModal)}>
                    <div>
                        <img src={cartUrl} alt="cart" />
                        <p>{totalItems} {totalItems === 1 ? `item` : `items`}</p>
                    </div>
                </div>
            </div>
        </header>

        {showModal && <CartModal totalItems={totalItems} cartInfo={cart} onClick={() => setShowModal(false)}/>}
    </>
}

export default NavigationComp