import React, { memo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import NextImage from 'next/image';

import Button from 'react-bootstrap/Button';
import { RetriveCartList } from '../../../lib/indexDB';
import { SecondaryButton } from '../../Button';
import { Logo } from '../../../lib/Constant';

const Header = memo((props) => {
    const [cartItem, setCartItem] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            RetriveCartList((result) => {
                setCartItem(result.length)
            })
        }, 1000);

    })

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
                <SecondaryButton title={`${cartItem} Items`}></SecondaryButton>
            </section>
        </header >
    );
});

export default Header;