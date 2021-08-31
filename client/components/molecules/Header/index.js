import Image from "next/image";
import Link from "next/link";
import {
  HeaderWrapper,
  Navigation,
  CartContainer,
  CartButton,
  CartIcon,
  ItemsCount,
} from "./Header.styles";
import Logo from "../../../public/images/logo_2x.png";

const Header = () => (
  <HeaderWrapper>
    <Image src={Logo} alt="Sabka Bazaar logo" width="142" height="64" />
    <Navigation aria-label="Site navigation">
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
    </Navigation>
    <CartContainer>
      <Navigation aria-label="login navigation">
        <Link href="/login">Sign in</Link>
        <Link href="/register">Register</Link>
      </Navigation>
      <CartButton aria-label="Cart items">
        <CartIcon />
        <ItemsCount>
          0 <span>items</span>
        </ItemsCount>
      </CartButton>
    </CartContainer>
  </HeaderWrapper>
);

export default Header;
