import React from 'react'
import SkipToMainContent from '../SkipToMainContent';
import Wrapper from '../Utilities/Wrapper';
import HamburgerMenu from './HamburgerMenu';
import { StyledHeader } from './Header.styled';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import Navbar from './Navbar';

const Header = () => {
    return (
        <StyledHeader>
            <Wrapper width={73}>
            <SkipToMainContent/>
            <Logo/>
            <Navbar />
            <HeaderMenu />
            <HamburgerMenu />
            </Wrapper>
        </StyledHeader>
    )
}

export default Header;