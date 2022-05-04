import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';

import {
  ProductCardContainer,
  Footer,
  Price,
  Name,
  Image,
  Desc
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageURL, description } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <Name>{name}</Name>
      <Image src={imageURL} alt={`${name}`} />
      <Desc>{description}</Desc>
      <Footer>
        <Price>MRP Rs.{price}</Price>
        <Button onClick={addProductToCart}>
          Buy Now
        </Button>
      </Footer>
    </ProductCardContainer>
  );
};

export default ProductCard;
