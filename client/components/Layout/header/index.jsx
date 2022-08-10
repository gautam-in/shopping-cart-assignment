import React, { createContext, memo, useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { SecondaryButton } from '../../Button';
import { CartContext } from '../../../Context/cart-state';


const Header = memo(() => {
    const [toggleCart, setToggleCart] = useState(false)
    const context = useContext(CartContext)
    const router = useRouter()

    const cartItem = context.cartCount || 0

    useEffect(() => {
        context.toggleCart(toggleCart)
    }, [toggleCart])


    return (
        <header>
            <NextImage src={"/static/images/logo.png"} alt="Sabka Bazar" width={190} height={86} />
            <nav>
                <Link href="/"><a>Home</a></Link>
                <Link href="/products"><a className={router.asPath.includes('product') ? 'active' : ''}>Products</a></Link>
            </nav>
            <section className='login-box'>
                <div>
                    <Link href="/signin"><a>Signin</a></Link>
                    <Link href="/register"><a>Register</a></Link>
                </div>
                <SecondaryButton onClick={() => setToggleCart(!toggleCart)}>{`${cartItem} Items`}</SecondaryButton>
            </section>
        </header>
    );
});

export default Header;