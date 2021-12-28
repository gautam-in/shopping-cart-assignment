import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { toggleCart } from './../../redux/Cart/actions';
import { selectNoOfItems } from './../../redux/Cart/selectors';

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
  const dispatch = useDispatch();
  const noOfCartItems = useSelector(selectNoOfItems);
  return (
    <HeaderWrapper>
      <Navbar>
          <Nav dir="left">
            <ImgContainer>
              <Link to="/"><img src={logo} alt="logo" /></Link>
            </ImgContainer>
            <NavOptions dir="left">
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
            </NavOptions>
          </Nav>
          <Nav dir="right">
            <NavOptions dir="right">
              <Link to="/login">SignIn</Link>
              <Link to="/register">Register</Link>
            </NavOptions>
            <Cart onClick={() => dispatch(toggleCart())}>
              <CartIcon /> <span>{noOfCartItems} items</span>
            </Cart>
          </Nav>
      </Navbar>
    </HeaderWrapper>
  );
}

export default Header;