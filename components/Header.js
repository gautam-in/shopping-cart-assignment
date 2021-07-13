import Link from 'next/link';
import { memo } from 'react';
import {
  HeaderCenter,
  HeaderContainer,
  LeftNav,
  RightNav,
} from './styles/HeaderStyle';
import CartIcon from './CartIcon';

function Header() {
  return (
    <HeaderContainer>
      <HeaderCenter>
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

export default memo(Header);
