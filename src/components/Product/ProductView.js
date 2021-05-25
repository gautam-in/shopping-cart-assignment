import { memo } from "react";
import { useSelector } from "react-redux";
import { Container } from "./ProductView.styles";

const ProductView = () => {
  const { products } = useSelector((state) => state.product);
  console.log({ products });
  return (
    <Container>
      {products.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </Container>
  );
};

export default memo(ProductView);
