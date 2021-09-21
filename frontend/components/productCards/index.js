import ProductCard from '../productCard';

import { ProductCardsWrapper } from 'styles/productCards.styled';

const ProductCards = ({ products }) => {
  return (
    <ProductCardsWrapper>
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </ProductCardsWrapper>
  );
};

export default ProductCards;
