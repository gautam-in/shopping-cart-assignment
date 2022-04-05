import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import Footer from '../../components/footer/footer';

import { selectIsCartOpen } from './../../store/cart/cart.selector';

import Logo from './../../assets/images/logo.png';

import {
  NavigationContainer,
  LogoContainer,
  CartIconContainer,
  // CartIcon,
  CartItemCount,
  NavLinks,
  NavLink,
  ActionButtons,
  ActionLink,
} from './navigation-with-footer.styles';
import { useSelector } from 'react-redux';

const NavigationWithFooter = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  return (
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
          <CartIconContainer>
            <CartIcon />
          </CartIconContainer>
        </div>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
      <Footer />
    </>
  );
};

export default NavigationWithFooter;
