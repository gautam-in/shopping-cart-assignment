import React from 'react'
import { StyledNavbar } from './Navbar.styled';

const Navbar = () => {
    return (
        <StyledNavbar>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/products">Products</a></li>
            </ul>
        </StyledNavbar>
    )
}

export default Navbar;