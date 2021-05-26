import { memo } from "react";
import { useSelector } from "react-redux";
import Item from "./Item";
import { Container } from "./ProductView.styles";

const ProductView = () => {
  const { products } = useSelector((state) => state.product);
  //   console.log({ products });
  return (
    <Container>
      {products.map((item) => (
        <Item key={item.id} data={item} />
      ))}
    </Container>
  );
};

export default memo(ProductView);
