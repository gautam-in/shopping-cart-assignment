import React from 'react'
import { StyledHamburger } from './HamburgerMenu.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setIsHamMenuOpen } from '../../../redux/slices/home';

const HamburgerMenu = ({onHamClick}) => {

    const dispatch = useDispatch();
    const isHamMenuOpen = useSelector((state) => state.home.isHamMenuOpen);

    const handleClick = (e) => {
        onHamClick(e);
        dispatch(setIsHamMenuOpen(!isHamMenuOpen));
    }

    const handleKeyPress = (e) => {
        onHamClick(e);
        dispatch(setIsHamMenuOpen(!isHamMenuOpen));
    }

    return (
        <StyledHamburger tabIndex={0} onKeyPress={(e) => handleKeyPress(e)} onClick={(e) => handleClick(e)} className={`hamburger ${isHamMenuOpen ? 'active' : ''}`}>
            <span>bar</span>
            <span>bar</span>
            <span>bar</span>
        </StyledHamburger>
    )
}

export default HamburgerMenu;