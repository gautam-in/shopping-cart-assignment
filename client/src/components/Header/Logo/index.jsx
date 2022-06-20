import React from 'react';
import { getLogo } from '../../../services/ApiService';
import { StyledLogo } from './Logo.styled';

const Logo = () => {

    const LogoSrc = getLogo();
    
    return (
        <StyledLogo><a href="/"><img src={LogoSrc} alt="Sabka Baazar - Logo" /></a></StyledLogo>
    )
}

export default Logo;