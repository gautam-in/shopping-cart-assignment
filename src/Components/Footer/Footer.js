import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
    min-height: 3rem;
    background: #ddd;
    margin-top: 3rem;
`;

const FooterContent = styled.p`
    color: black;
    font-size: 1rem;
    text-align: center;
    padding: 1rem;
`;

export default function Footer(){
    return(
        <FooterWrapper data-testid='footer'>
            <FooterContent>Copyright @ 2011-2018 Sabka Bazaar Grocery Supplies Pvt. ltd</FooterContent>
        </FooterWrapper>
    )
}