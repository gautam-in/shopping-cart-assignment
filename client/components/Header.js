import {
  HeaderStyle,
  HeaderLeft,
  HeaderRight,
  HeaderContainer,
} from "../styles/HeaderStyle";
import CartIcon from "./CartIcon";

import Link from "next/Link";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderStyle>
        <HeaderLeft>
          <Link href="/">
            <img
              src="/static/images/logo.png"
              layout="responsive"
              alt="Sabka Bazar"
            />
          </Link>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
          </ul>
        </HeaderLeft>
        <HeaderRight>
          <ul>
            <li>
              <Link tabIndex={0} href="/signIn">Signin</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
          <CartIcon />
        </HeaderRight>
      </HeaderStyle>
    </HeaderContainer>
  );
};

export default Header;
