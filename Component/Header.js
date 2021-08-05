import NavBarStyles from "./styles/NavBarStyles";
import {
  SignUpContainerStyles,
  Container,
  CartBtn,
} from "./styles/SignUpContainerStyles";
import { HeaderStyle, Logo } from "./styles/HeaderStyles";
import Link from "next/link";
import Cart from "./Cart";
import { SIGN_OUT } from "../context/actions/Constant";
import { useRouter } from "next/router";
import {
  Home,
  Product,
  SignIn,
  Register,
  SignOut,
  Items,
  CartImg,
  LogoImg,
  User,
  SmalLogo,
} from "../constant/index";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { LoginContext } from "../context/LoginContext";
import { SET_CART_OPEN } from "../context/actions/Constant";
export default function Header() {
  const router = useRouter();
  const { cartItems, cartOpen, dispatch } = useContext(CartContext);
  const { userId, logindispatch } = useContext(LoginContext);
  const setCartState = (isOpen) => {
    dispatch({ type: SET_CART_OPEN, payload: isOpen });
  };
  const LogOut = () => {
    logindispatch({ type: SIGN_OUT });
    router.push("/");
  };

  return (
    <HeaderStyle>
      <Link href="/">
        <Logo
          className="logo"
          src={LogoImg}
          alt="shopping-cart-logo"
          srcSet={SmalLogo}
        />
      </Link>
      <NavBarStyles>
        <ul>
          <li>
            <Link href="/">{Home}</Link>
          </li>
          <li>
            <Link href="/products">{Product}</Link>
          </li>
        </ul>
      </NavBarStyles>
      <SignUpContainerStyles>
        <Container>
          {!userId ? (
            <>
              <Link href="/login">{SignIn}</Link>
              <Link href="/register">{Register}</Link>
            </>
          ) : (
            <>
              <span>{User}</span>
              <span onClick={LogOut}>{SignOut}</span>
            </>
          )}
        </Container>
        <CartBtn onClick={() => setCartState(!cartOpen)}>
          <img src={CartImg} alt="cart item" loading="lazy" />
          <span>
            {cartItems?.cart?.length} {Items}
          </span>
          <span>{cartOpen}</span>
        </CartBtn>
      </SignUpContainerStyles>
      <Cart />
    </HeaderStyle>
  );
}
