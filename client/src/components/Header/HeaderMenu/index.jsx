import React from 'react'
import CartBox from '../CartBox';

const HeaderMenu = () => {
    return (
        <div className='header-menu'>
            <ul className='auth-links'>
                <li><a href="/signin">Signin</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
            <CartBox itemCount={1} />
        </div>
    )
}

export default HeaderMenu;