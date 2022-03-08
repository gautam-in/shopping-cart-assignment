import React, { useEffect, useState } from 'react';
import './header.css';
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { getCartItemCount } from '../../redux/cart/cart.action';
import { Link } from 'react-router-dom';


function Header() {

    const { itemsInCart, totalCount } = useSelector(({ cart }) => cart)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartItemCount());
    }, [])


    return (
        <HeaderContainer>
            <NavBar>
                <Logo>
                    <StyledLink to='/'>
                        <img src='/static/images/logo.png' alt="" />
                    </StyledLink>

                </Logo>

                <Navigation>
                    <NavLinks>
                        <StyledLink to='/'><p>Home</p></StyledLink>
                        <StyledLink to='/category/all'><p>Products</p></StyledLink>
                    </NavLinks>
                </Navigation>

                <CartSection>
                    <LoginLinks>
                        <StyledLink to='/signin'><p>SignIn</p></StyledLink>
                        <StyledLink to='/register'><p>Register</p></StyledLink>
                    </LoginLinks>
                    <CartItemCounter>
                        <img src='/static/images/cart.svg' height="30" alt="" />
                        <StyledLink to='/cart'><span>{totalCount} items</span></StyledLink>
                    </CartItemCounter>
                </CartSection>
            </NavBar>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    box-shadow: 0px 5px 10px 0px rgba(189, 182, 189, 0.5);
    background-color: #fff;
`;

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 0.5;
`;

const Logo = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
`;

const Navigation = styled.div`
     align-self: flex-end;
     padding-bottom: 20px;
     flex-grow: 0.5;
`;

const NavLinks = styled.div`
    display: flex;
    gap: 10px;
    justify-content: flex-start; 
`

const CartSection = styled.div`
     display: flex;
     flex-direction: column;
     justify-content: flex-end;
`;

const LoginLinks = styled.div`
     display: flex;
     gap: 5px;
     justify-content: flex-end;   
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #6e676a;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
`;

const CartItemCounter = styled.div`
     display: flex;
     padding: 10px;
     background-color: #eeeeee;
     gap: 5px;
     align-items: center;
     justify-content: center;
`

export default Header;