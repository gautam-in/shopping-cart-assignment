import ProductCard from "./ProductCard";
import Low from "static/images/lowest-price.png";
import { Container, LowPrice } from "./CartBody.styles";

const CartBody = ({ data }) => {
  const arr = Object.keys(data);
  return (
    <Container>
      {arr.map((item) => (
        <ProductCard key={data[item].id} data={data[item]} />
      ))}
      <LowPrice>
        <img className="low-img" src={Low} alt="low-price" />
        <span>You won&apos;t find it cheaper anywhere</span>
      </LowPrice>
    </Container>
  );
};

export default CartBody;
