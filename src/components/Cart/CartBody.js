import Low from "static/images/lowest-price.png";
import { Container, LowPrice } from "./CartBody.styles";

const CartBody = ({ closeCart, totalprice }) => {
  console.log({ closeCart, totalprice });
  return (
    <Container>
      
      <LowPrice>
        <img className="low-img" src={Low} alt="low-price" />
        <span>You won&apos;t find it cheaper anywhere</span>
      </LowPrice>
    </Container>
  );
};

export default CartBody;
