import React from 'react'
import { Link } from 'react-router-dom';
import CartLogo from '../../../static/images/cart.svg'; 
import { AppCartAndAuthHeaders, AppLogoContainer, AppPageHeaders, HeaderContainer } from './Header.styled.component';


const Header = () => {
    return (
        <HeaderContainer>
          <AppLogoContainer>
              <h1>Logo</h1>
          </AppLogoContainer>
          <AppPageHeaders>
              <Link to='/'></Link>
          </AppPageHeaders>
          <AppCartAndAuthHeaders>
          <Link to='/sign-up'>Register</Link>
          <Link to='/login'>Signin</Link>

          </AppCartAndAuthHeaders>
        </HeaderContainer>
    )
}

export default Header;
