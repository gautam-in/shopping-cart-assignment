import { Container } from "./CartIcon.styles";
import Cart from "images/cart.svg";

const CartIcon = () => {
  return (
    <Container>
      <img src={Cart} alt="cart-icon" />
      <span>{2} items</span>
    </Container>
  );
};

export default CartIcon;
