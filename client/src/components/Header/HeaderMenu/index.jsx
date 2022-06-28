import CartBox from '../CartBox';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import { StyledHeaderMenu } from './HeaderMenu.styled';
import useToggleHamMenu from '../../../hooks/useToggleHamMenu';
import { useDispatch, useSelector } from 'react-redux';
import { setIsUserLoggedIn, setUserEmail } from '../../../redux/slices/auth';

const HeaderMenu = ({show}) => {

  const dispatch = useDispatch();
  const {toggleHamMenu} = useToggleHamMenu();
  const userEmail = useSelector((state) => state.auth.userEmail);
  const isUserLoggedIn = useSelector((state) => state.auth.isUserLoggedIn);
 
  useEffect(() => {
    if(sessionStorage.length > 0) {
      const user = JSON.parse(sessionStorage.getItem('userData'))?.[0];
      if(user) {
        dispatch(setIsUserLoggedIn(true));
        dispatch(setUserEmail(user.email));
      }
    }
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('userData');
    dispatch(setIsUserLoggedIn(false));
  }

  return (
    <StyledHeaderMenu className='header-menu'>
      {
        !isUserLoggedIn ?
        (
          <ul className={`auth-links ${show ? 'slide-in-right visible' : ''}`}>
            <li>
              <Link onClick={toggleHamMenu} to="/form/sign-in" title='sign in' >Signin</Link>
            </li>
            <li>
              <Link onClick={toggleHamMenu} to="/form/register" title='register' >Register</Link>
            </li>
          </ul>
        ) : (
          <div className="auth-links logout">
            <p>Hi {userEmail}</p>
            <Link to="/" onClick={handleLogout} title='logout' >logout</Link>
          </div>
        )
      }
      <CartBox />
    </StyledHeaderMenu>
  );
};

export default HeaderMenu;
