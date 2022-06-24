import HamburgerMenu from './HamburgerMenu';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import Navbar from './Navbar';
import Overlay from '../Utilities/Overlay';
import React from 'react'
import SkipToMainContent from '../SkipToMainContent';
import { StyledHeader } from './Header.styled';
import Wrapper from '../Utilities/Wrapper';
import theme from '../../theme';

const Header = () => {
    return (
        <StyledHeader>
            <Wrapper width={73}>
            <SkipToMainContent/>
            <Logo/>
            <Navbar />
            <HeaderMenu />
            <HamburgerMenu />
            <Overlay color="white"/>
            </Wrapper>
        </StyledHeader>
    )
}

export default Header;