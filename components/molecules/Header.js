
import NavBarStyles from "../styles/NavBarStyles";
import {SignUpContainerStyles,Container,CartBtn} from "../styles/SignUpContainerStyles";
import { HeaderStyle,Logo } from "../styles/HeaderStyles";
import Link from "next/link";
import Cart from "../organism/Cart";
import { useDispatch, useSelector } from "react-redux";
import { setCartOpen } from "../../redux/actions";
import {SIGN_OUT} from "../../redux/actions/Constant"
import { useRouter } from "next/router";

export default function Header() {
    const dispatch = useDispatch();
    const router = useRouter();
    const userId = useSelector(state => state.categories.userId)
    const cartOpen = useSelector(state => state.cart.cartOpen);
    const cartItems = useSelector(state => state.cart.cartItems?.cart);
    const LogOut = () =>{
      dispatch({type: SIGN_OUT})
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
      <Container>
        { !userId  ? 
        <>
          <Link href="/login">Sign in</Link>
          <Link href="/register">Register</Link>
      </>
        :
        <>
        <span>Hi, user</span>
        <span onClick={LogOut}>Sign out</span>
        </>
        
        }
          </Container>
        <CartBtn onClick={() => dispatch(setCartOpen(!cartOpen))}>
          <img src="/static/images/cart.svg" alt="cart item"/>
          <span>{cartItems?.length} Items</span>
          <span>{cartOpen}</span>
        </CartBtn>
      </SignUpContainerStyles>
      <Cart />
    </HeaderStyle>
  );
}
