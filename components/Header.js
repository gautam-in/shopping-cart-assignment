import Link from 'next/link';
import {
  HeaderCenter,
  HeaderContainer,
  LeftNav,
  RightNav,
} from './styles/HeaderStyle';
import CartIcon from './CartIcon';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderCenter>
        {/* Left Navigation */}
        <LeftNav>
          <img
            srcSet="/static/images/logo_2x.png 2x"
            src="/static/images/logo.png"
            alt="Sabka Bazaarlogo"
          />
          <ul>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/products">
              <a>Products</a>
            </Link>
          </ul>
        </LeftNav>
        {/* Right Navigation */}
        <RightNav>
          <ul>
            <Link href="/signin">
              <a>Signin</a>
            </Link>
            <Link href="/register">
              <a>Register</a>
            </Link>
          </ul>
          <CartIcon />
        </RightNav>
      </HeaderCenter>
    </HeaderContainer>
  );
}
