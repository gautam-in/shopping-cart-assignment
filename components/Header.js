import Link from 'next/link';
import Image from 'next/image';
import {
  HeaderCenterDiv,
  HeaderContainer,
  LeftNav,
  RightNav,
} from './styles/HeaderStyle';
import { BASE_URL } from '../config';
import CartIcon from './CartIcon';
import { CenterDiv } from './styles/GlobalStyles';

export default function Header() {
  return (
    <HeaderCenterDiv>
      <HeaderContainer>
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
          <CartIcon />
        </RightNav>
      </HeaderContainer>
    </HeaderCenterDiv>
  );
}
