import Link from 'next/link';
import Image from 'next/image';
import {
  HeaderCenter,
  HeaderContainer,
  LeftNav,
  RightNav,
} from './styles/HeaderStyle';
import { BASE_URL } from '../config';
import CartIcon from './CartIcon';
import { CenterDiv } from './styles/GlobalStyles';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderCenter>
        <LeftNav>
          <img
            src={`${BASE_URL}static/images/logo_2x.png`}
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
