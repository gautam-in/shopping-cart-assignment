import React from 'react';
import styled from 'styled-components';

const LogoImage = styled.img`
    width: 135px;
    height:65px;
    @media (max-width: 480px) {
        width: 90px;
        height: 44px;
    }
    @media (min-width:481px) and (max-width: 780px) {
        width: 120px;
        height: 56px;
    }

`;

export default function Logo(){
    return(
        <LogoImage src="static/images/logo.png" alt='logo' data-testid='logo'/>
    )
}