import { Fragment, useContext } from 'react';
import { Outlet } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

import { CartContext } from '../../contexts/cart.context';

import {
  NavigationContainer,
  LeftMenu,
  RightMenu,
  NavLink,
  Auth,
  LogoContainer,
  Logo,
  OutletContainer,
  Footer
} from './navigation.styles';

const Navigation = () => {
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <Logo src="/static/images/logo_2x.png" alt="Logo" />
        </LogoContainer>
        <LeftMenu>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/products'>Products</NavLink>
        </LeftMenu>
        <RightMenu>
          <Auth>
            <NavLink to='/signin'>SignIn</NavLink>
            <NavLink to='/register'>Register</NavLink>
          </Auth>
          <CartIcon />
        </RightMenu>
      </NavigationContainer>
      {isCartOpen && <CartDropdown />}
      <OutletContainer>
        <Outlet />
      </OutletContainer>
      <Footer>Copyright &#169; 2011-2018 Sabka Bazaar Grocery Supplies Pvt Ltd</Footer>
    </Fragment>
  );
};

export default Navigation;
