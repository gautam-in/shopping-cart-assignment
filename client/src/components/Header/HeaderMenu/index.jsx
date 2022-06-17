import React from 'react'
import CartBox from '../CartBox';
import { StyledHeaderMenu } from './HeaderMenu.styled';

const HeaderMenu = () => {
    return (
        <StyledHeaderMenu className='header-menu'>
            <ul className='auth-links'>
                <li><a href="/signin">Signin</a></li>
                <li><a href="/register">Register</a></li>
            </ul>
            <CartBox itemCount={0} />
        </StyledHeaderMenu>
    )
}

export default HeaderMenu;