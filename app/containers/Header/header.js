import CartButton from '../../components/Header/CartButton';
import Logo from '../../components/Header/Logo';
import NavBar from '../../components/Header/NavBar';
import SignUp from '../../components/Header/SignUp';
import HeaderStyle from './header.styles';
import { RightNav } from './rightNav.styles';
import Cart from '../Cart';

const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
      <NavBar />
      <RightNav>
        <SignUp />
        <CartButton />
      </RightNav>
      <Cart />
    </HeaderStyle>
  );
};
export default Header;
