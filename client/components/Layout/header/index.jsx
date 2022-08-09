import React, { createContext, memo, useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import NextImage from 'next/image';

import Button from 'react-bootstrap/Button';
import { RetriveCartList } from '../../../lib/indexDB';
import { SecondaryButton } from '../../Button';
import { Logo } from '../../../lib/Constant';
import { CartContext } from '../../../Context/cart-state';


const Header = memo((props) => {
    // const [cartItem, setCartItem] = useState(0)

    const [toggleCart, setToggleCart] = useState(false)
    const context = useContext(CartContext)
    const cartItem = context.cartCount || 0

    useEffect(() => {
        context.toggleCart(toggleCart)
    }, [toggleCart])


    return (
        <header>
            <NextImage src={Logo} alt="Sabka Bazar" width={190} height={86} />
            <nav>
                <a href="/">Home</a>
                <a href="/products">Products</a>
            </nav>
            <section className='login-box'>
                <div>
                    <a>Signin</a>
                    <a>Register</a>
                </div>
                <SecondaryButton title={`${cartItem} Items`} onClick={() => setToggleCart(!toggleCart)} ></SecondaryButton>
            </section>
        </header>
    );
});

export default Header;