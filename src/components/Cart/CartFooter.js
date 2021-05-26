import { Container } from "./CartFooter.styles";

const CartFooter = ({ closeCart, totalprice }) => {
  console.log({ totalprice });
  return (
    <Container>
      <div className="promo">Promo code can be applied on payment page</div>
      <div className="proceed-btn" onClick={closeCart}>
        <div>Proceed to Checkout</div>
        <div>Rs.{totalprice} &gt;</div>
      </div>
    </Container>
  );
};

export default CartFooter;
