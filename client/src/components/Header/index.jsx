import React, { useState } from 'react'

import HamburgerMenu from './HamburgerMenu';
import HeaderMenu from './HeaderMenu';
import Logo from './Logo';
import Navbar from './Navbar';
import Overlay from '../Utilities/Overlay';
import SkipToMainContent from '../SkipToMainContent';
import { StyledHeader } from './Header.styled';
import Wrapper from '../Utilities/Wrapper';
import { getNumericalWidth } from '../../services/getFormattedDataServices';
import theme from '../../theme';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import { useDispatch, useSelector } from 'react-redux';
import { setIsHamMenuOpen } from '../../redux/slices/home';

const Header = () => {

    const dispatch = useDispatch();
    const isHamMenuOpen = useSelector((state) => state.home.isHamMenuOpen);
    const [overlayClass, setOverlayClass] = useState('');
    const {width} = useWindowDimensions();
    const TAB_WIDTH = getNumericalWidth(theme.breakpoints.TAB);

    const isHamburgerClicked = () => {
        dispatch(setIsHamMenuOpen(!isHamMenuOpen));
        setOverlayClass('header-overlay');
    }

    return (
        <StyledHeader>
            <Wrapper width={73}>
            <SkipToMainContent/>
            <Logo/>
            <Navbar show={isHamMenuOpen} />
            <HeaderMenu show={isHamMenuOpen} />
            <HamburgerMenu onHamClick={isHamburgerClicked} />
            {
                (width <= TAB_WIDTH) &&
                (<Overlay show={isHamMenuOpen} styleClass={overlayClass} color='aliceblue' />)
            }
            </Wrapper>
        </StyledHeader>
    )
}

export default Header;