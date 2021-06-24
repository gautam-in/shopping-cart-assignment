import { memo } from "react";
import Item from "./Item";
import { Container } from "./ProductView.styles";

const ProductView = ({ product }) => {
  return (
    <Container>
      {product.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </Container>
  );
};

export default memo(ProductView);
