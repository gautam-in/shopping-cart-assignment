import CartBox from '../CartBox';
import { Link } from 'react-router-dom';
import React from 'react';
import { StyledHeaderMenu } from './HeaderMenu.styled';
import useToggleHamMenu from '../../../hooks/useToggleHamMenu';

const HeaderMenu = ({show}) => {

  const {toggleHamMenu} = useToggleHamMenu();

  return (
    <StyledHeaderMenu className='header-menu'>
      <ul className={`auth-links ${show ? 'slide-in-right visible' : ''}`}>
        <li>
          <Link onClick={toggleHamMenu} to="/form/sign-in">Signin</Link>
        </li>
        <li>
          <Link onClick={toggleHamMenu} to="/form/register">Register</Link>
        </li>
      </ul>
      <CartBox />
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
