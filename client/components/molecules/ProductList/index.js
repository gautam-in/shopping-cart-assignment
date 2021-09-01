import ProductItem from "../ProductItem";
import { ProductListWrapper } from "./ProductList.styles";

const ProductList = ({ productsList }) => {
  if (!productsList.length) return null;

  return (
    <ProductListWrapper>
      {productsList.map((productItem) => (
        <ProductItem key={productItem.id} productItem={productItem} />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
