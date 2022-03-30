import { Outlet, Link } from 'react-router-dom';

import Logo from './../../assets/images/logo.png';

import {
  NavigationContainer,
  CartIconContainer,
  CartIcon,
  CartItemCount,
  NavLinks,
  NavLink,
} from './navigation.styles';

const Navigation = () => (
  <>
    <NavigationContainer>
      <div className="logo-container" to="/">
        <img src={Logo} alt="Subka bazaar brand logo" />
      </div>
      <NavLinks>
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/home">Products</NavLink>
      </NavLinks>
      <div>
        <div>
          <span>Register</span>
          <span>Login</span>
        </div>
        <CartIconContainer>
          <CartIcon />
          <CartItemCount> 0 item </CartItemCount>
        </CartIconContainer>
      </div>
    </NavigationContainer>
    <Outlet />
  </>
);
export default Navigation;
