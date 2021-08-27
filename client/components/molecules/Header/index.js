import Image from "next/image";
import Link from "next/link";
import {
  HeaderWrapper,
  Navigation,
  CartContainer,
  CartButton,
  CartIcon,
} from "./Header.styles";
import Logo from "../../../public/images/logo.png";

const Header = () => (
  <HeaderWrapper>
    <Image
      src={Logo}
      alt="Sabka Bazaar logo"
      width="190"
      height="86"
      className="logo"
      layout="intrinsic"
    />
    <Navigation>
      <Link href="/">Home</Link>
      <Link href="/products">Products</Link>
    </Navigation>
    <CartContainer>
      <Navigation>
        <Link href="/login">Sign in</Link>
        <Link href="/register">Register</Link>
      </Navigation>
      <CartButton>
        <CartIcon />
        <span>0 items</span>
      </CartButton>
    </CartContainer>
  </HeaderWrapper>
);

export default Header;
