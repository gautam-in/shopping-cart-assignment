import React from 'react'
import HamburgerMenu from './HamburgerMenu';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <Logo/>
            <Navbar />
            <HeaderMenu />
            <HamburgerMenu />
        </header>
    )
}

export default Header;