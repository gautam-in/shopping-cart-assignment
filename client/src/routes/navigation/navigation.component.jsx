import { Link, Outlet } from 'react-router-dom';

import Logo from './../../assets/images/logo.png';

import {
  NavigationContainer,
  CartIconContainer,
  CartIcon,
  CartItemCount,
  NavLinks,
  NavLink,
  ActionButtons,
  ActionLink,
} from './navigation.styles';

const Navigation = () => (
  <>
    <NavigationContainer>
      <Link className="logo-container" to="/">
        <img src={Logo} alt="Subka bazaar brand logo" />
      </Link>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
      </NavLinks>
      <div>
        <ActionButtons>
          <ActionLink to="/register">Register</ActionLink>
          <ActionLink to="/login">Login</ActionLink>
        </ActionButtons>
        <CartIconContainer to="/cart">
          <CartIcon />
          <CartItemCount> 0 item </CartItemCount>
        </CartIconContainer>
      </div>
    </NavigationContainer>
    <Outlet />
  </>
);
export default Navigation;
