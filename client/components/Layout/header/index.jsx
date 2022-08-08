import React, { memo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { RetriveCartList } from '../../../lib/indexDB';
import { SecondaryButton } from '../../Button';

let Logo = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5Ywv9gspkD3mUWUbkpf8H_yX8CMzo9X1Dag&usqp=CAU"

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
            <img src={Logo} alt="Sabka Bazar" />
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