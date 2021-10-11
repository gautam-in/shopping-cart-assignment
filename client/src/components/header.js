import { useContext, useMemo } from "react";
import CartContext from "./../library/contexts/cartContext";
import Nav from "./nav";
import { NavLink } from "react-router-dom";
import {
  Logo,
  HeaderStyles,
  NavStyles,
  CartStyles,
  CustomButton,
} from "../styles/HeaderStyles";

export default function Header() {
  const { openCart, products = [] } = useContext(CartContext);
  const ITEMS_COUNT = useMemo(() => {
    return products.reduce((prev, cur) => {
      return prev + cur.quantity;
    }, 0);
  }, [products]);
  return (
    <>
      <HeaderStyles>
        <section>
          <NavLink to="/">
            <Logo src={`/static/images/logo.png`} alt="logo" />
          </NavLink>
          <Nav />
        </section>
        <CartStyles>
          <NavStyles>
            <NavLink to="/signin">SignIn</NavLink>
            <NavLink to="/register">Register</NavLink>
          </NavStyles>
          <div>
            <CustomButton onClick={openCart}>
              <img src={`/static/images/cart.svg`} alt={"Cart"} />
              <h5>{ITEMS_COUNT} Items</h5>
            </CustomButton>
          </div>
        </CartStyles>
      </HeaderStyles>
    </>
  );
}
