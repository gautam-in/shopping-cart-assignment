import React from 'react'
import { Link } from 'react-router-dom';
import CartBox from '../CartBox';
import { StyledHeaderMenu } from './HeaderMenu.styled';

const HeaderMenu = () => {
    return (
        <StyledHeaderMenu className='header-menu'>
            <ul className='auth-links'>
                <li><Link to="/sign-in">Signin</Link></li>
                <li><Link to="/register">Register</Link></li>
            </ul>
            <CartBox itemCount={0} />
        </StyledHeaderMenu>
    )
}

export default HeaderMenu;