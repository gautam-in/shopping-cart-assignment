import React from 'react'
import LogoSrc from '../../../assets/static/images/logo.png';
import { StyledLogo } from './Logo.styled';
const Logo = () => {
    return (
        <StyledLogo><a href="/"><img src={LogoSrc} alt="Sabka Baazar - Logo" /></a></StyledLogo>
    )
}

export default Logo;