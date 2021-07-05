import NavBarStyles from "../styles/NavBarStyles";
import { HeaderStyle,Logo } from "../styles/HeaderStyles";
import Link from "next/link";
import {SignUpContainerStyles,Container,CartBtn} from "../styles/SignUpContainerStyles";

export default function Header() {
    return (
    <HeaderStyle>
    <Link href="/">
      <Logo
        className="logo"
        src="/static/images/logo_2x.png"
        alt="shopping-cart-logo"
        srcSet="/static/images/logo.png 767w"
      />
    </Link>
    <NavBarStyles>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/products">Products</Link>
        </li>
      </ul>
    </NavBarStyles>
    <SignUpContainerStyles>
    <Container>
        <Link href="/login">Sign in</Link>
        <Link href="/register">Register</Link>
        </Container>
      <CartBtn>
        <img src="/static/images/cart.svg" alt="cart item"/>
        <span>Items</span>
        <span>cart</span>
      </CartBtn>
    </SignUpContainerStyles>
    
  </HeaderStyle>
  );
}