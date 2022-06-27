import { Link } from 'react-router-dom';
import React from 'react'
import { StyledNavbar } from './Navbar.styled';
import useToggleHamMenu from '../../../hooks/useToggleHamMenu';

const Navbar = ({show}) => {

    const {toggleHamMenu} = useToggleHamMenu();

    return (
        <StyledNavbar>
            <ul className={`nav-links ${show ? 'slide-in-right visible' : ''}`}>
                <li><Link onClick={toggleHamMenu} to="/">Home</Link></li>
                <li><Link onClick={toggleHamMenu} to="/product/all/">Products</Link></li>
            </ul>
        </StyledNavbar>
    )
}

export default Navbar;