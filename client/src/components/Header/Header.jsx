import React from 'react';
import './header.css';
import styled from 'styled-components'
import { Link } from 'react-router-dom';


function Header() {
    return (
        <HeaderContainer>
            <NavBar>
                <Logo>
                    <Link to='/'>
                        <img src='/static/images/logo.png' alt="" />
                    </Link>

                </Logo>

                <Navigation>
                    <nav className="nav-links">
                        <Link to='/'>Home</Link>
                        <Link to='/category/5b6899683d1a866534f516e0'>Products</Link>
                    </nav>
                </Navigation>

                <CartSection>
                    <LoginLinks>
                        <p>SignIn</p>
                        <p>Register</p>
                    </LoginLinks>
                    <CartItemCounter>
                        <img src='/static/images/cart.svg' height="30" alt="" />
                        <span>0 items</span>
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

const CartItemCounter = styled.div`
     display: flex;
     padding: 10px;
     background-color: #eeeeee;
     gap: 5px;
     align-items: center;
     justify-content: center;
`

export default Header;