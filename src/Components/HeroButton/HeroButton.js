import React from 'react';
import styled from 'styled-components';

const HeroButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ddd;
    padding: 13px 10px;
    max-width: 60%;
    cursor: pointer;

    @media (min-width:481px) and (max-width: 768px) {
        max-width: 70%;
    }

    @media(max-width: 480px){
        padding: 25px 10px;
        position: relative;
        left: 40%;
    }
`;

const HeroButtonLogo = styled.img`
    max-width: 30px;
`;
const HeroButtonContent = styled.div`
    color: black;
    font-size: .9rem;
    margin-right: 5px;
    margin-top: 5px;
`;

export default function HeroButton({imgUrl,items, handleClick}){
    return(
        <HeroButtonWrapper onClick={handleClick} data-testid='hero-button'>
            <HeroButtonLogo src={imgUrl} alt='cart-icon'></HeroButtonLogo>
            <HeroButtonContent>{items}</HeroButtonContent>
        </HeroButtonWrapper>
    )
}