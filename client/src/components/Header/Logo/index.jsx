import React from 'react';
import { StyledLogo } from './Logo.styled';
import { getLogo } from '../../../services/ApiService';

const Logo = () => {

    const LogoSrc = getLogo();

    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <StyledLogo><a href="#" title='logo'><img src={LogoSrc} alt="Sabka Baazar - Logo" /></a>logo</StyledLogo>
    )
}

export default Logo;