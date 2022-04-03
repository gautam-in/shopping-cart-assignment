import { Outlet } from 'react-router-dom';
import Footer from '../../components/footer/footer';

import Logo from './../../assets/images/logo.png';

import {
  NavigationContainer,
  LogoContainer,
  CartIconContainer,
  CartIcon,
  CartItemCount,
  NavLinks,
  NavLink,
  ActionButtons,
  ActionLink,
} from './navigation-with-footer.styles';

const NavigationWithFooter = () => (
  <>
    <NavigationContainer>
      <LogoContainer to="/">
        <img src={Logo} alt="Subka bazaar brand logo" />
      </LogoContainer>
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
          <CartItemCount> 0 items </CartItemCount>
        </CartIconContainer>
      </div>
    </NavigationContainer>
    <Outlet />
    <Footer />
  </>
);
export default NavigationWithFooter;
