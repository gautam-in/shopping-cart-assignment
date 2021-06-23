import styled from "styled-components";
import NavBarStyles from "./styles/NavBarStyles";
import SignUpContainerStyles from "./styles/SignUpContainerStyles";
import Link from "next/link";
import Cart from "./Cart";
import { useDispatch, useSelector } from "react-redux";
import { resetStore, setCartOpen, signOut } from "../actions";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const HeaderStyle = styled.header`
  display: flex;
  justify-content: space-evenly;
  padding-top: 0.75%;
  font-size: 0.8rem;
  box-shadow: 0px 3px 6px rgb(138 135 135 / 40%);
  /* margin-bottom: 1.5rem; */
  position: fixed;
  width: 100%;
  background-color: #fff;
  z-index:2;
  top: 0;
  height: var(--headerHeight);
  @media only screen and (max-width:767px){
      height: calc(var(--headerHeight)/2);
      padding: 0;
      justify-content: space-between;
  }
`;

const Logo = styled.img`
  margin: 0.25rem 0;
  cursor: pointer;
  padding: 0 2%;
`;

export default function Header() {
    const dispatch = useDispatch();
    const router = useRouter();
    const cartOpen = useSelector(state => state.categories.cartOpen);
    const cartItems = useSelector(state => state.categories.cartItems?.cart);
    const userId1 = useSelector(state => state.categories.userId)
    const [userId, setUserId] = useState(userId1);
    useEffect(() => {
        setUserId(localStorage.getItem('user'))
     
    }, [userId,userId1])
    const SignOut = () =>{
      dispatch(signOut())
      setUserId(null)
      router.push('/')
    }
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
        {!userId || !userId1  ? 
        <>
          <Link href="/login">Sign in</Link>
          <Link href="/register">Register</Link>
      </>
        :
        <>
        <span>Hi, user</span>
        <span onClick={SignOut}>Sign out</span>
        </>
        
        }
          </div>
        <div className="cart-btn" onClick={() => dispatch(setCartOpen(!cartOpen))}>
          <img src="/static/images/cart.svg" alt="cart item"/>
          <span>{cartItems?.length} Items</span>
          <span>{cartOpen}</span>
        </div>
      </SignUpContainerStyles>
      <Cart />
    </HeaderStyle>
  );
}
