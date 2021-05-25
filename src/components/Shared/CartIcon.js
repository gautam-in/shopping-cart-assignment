import { memo } from "react";
import { useSelector } from "react-redux";
import { Container } from "./CartIcon.styles";
import Cart from "static/images/cart.svg";

const CartIcon = () => {
  const { cartItems } = useSelector((state) => state.product);
  return (
    <Container>
      <img src={Cart} alt="cart-icon" />
      <span>{cartItems.length} items</span>
    </Container>
  );
};

export default memo(CartIcon);
