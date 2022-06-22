import CartBox from '../CartBox';
import { Link } from 'react-router-dom';
import React from 'react';
import { StyledHeaderMenu } from './HeaderMenu.styled';

const HeaderMenu = () => {
  return (
    <StyledHeaderMenu className="header-menu">
      <ul className="auth-links">
        <li>
          <Link to="/sign-in">Signin</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
      <CartBox />
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
