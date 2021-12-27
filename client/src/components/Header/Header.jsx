import React from 'react';

import { 
        HeaderWrapper,
        Navbar,
        Nav,
        NavOptions,
        ImgContainer,
        Cart
      } from './styles';
import { ReactComponent as CartIcon } from './../../assets/cart.svg';
import logo from './../../assets/logo.png';

const Header = () => {
  // useEffect(() => {
  //   async function fetchBanners() {
  //     const banners = await (await fetch('http://localhost:5000/banners')).json();
  //     console.log(banners);
  //   }
  //   fetchBanners();
  // }, []);
  return (
    <HeaderWrapper>
      <Navbar>
          <Nav dir="left">
            <ImgContainer>
              <a href="/"><img src={logo} alt="logo" /></a>
            </ImgContainer>
            <NavOptions dir="left">
              <a href="/">Home</a>
              <a href="/">Products</a>
            </NavOptions>
          </Nav>
          <Nav dir="right">
            <NavOptions dir="right">
              <a href="/">SignIn</a>
              <a href="/">Register</a>
            </NavOptions>
            <Cart>
              <CartIcon /> <span>0 items</span>
            </Cart>
          </Nav>
      </Navbar>
    </HeaderWrapper>
  );
}

export default Header;