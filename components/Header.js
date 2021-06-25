import NavBarStyles from "./styles/NavBarStyles";
import SignUpContainerStyles from "./styles/SignUpContainerStyles";
import Link from "next/link";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { setCartOpen, signOut } from "../actions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeaderStyle from "./styles/HeaderStyle";
import Logo from "./styles/LogoStyle";

export default function Header() {
  const dispatch = useDispatch();
  const router = useRouter();
  const cartOpen = useSelector((state) => state.categories.cartOpen);
  const cartItems = useSelector((state) => state.categories.cartItems?.cart);
  const userId1 = useSelector((state) => state.categories.userId);
  const [userId, setUserId] = useState(userId1);
  useEffect(() => {
    setUserId(localStorage.getItem("user"));
  }, [userId]);
  const SignOut = () => {
    dispatch(signOut());
    setUserId(null);
    router.push("/");
  };
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
        <div className="signIn-container">
          {!userId || !userId1 ? (
            <>
              <Link href="/login">Sign in</Link>
              <Link href="/register">Register</Link>
            </>
          ) : (
            <>
              <span>Hi, user</span>
              <span onClick={SignOut}>Sign out</span>
            </>
          )}
        </div>
        <div
          className="cart-btn"
          onClick={() => dispatch(setCartOpen(!cartOpen))}
        >
          <img src="/static/images/cart.svg" alt="cart item" />
          <span>{cartItems?.length} Items</span>
          <span>{cartOpen}</span>
        </div>
      </SignUpContainerStyles>
      <Cart />
    </HeaderStyle>
  );
}
