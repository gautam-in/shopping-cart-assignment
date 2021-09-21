import CustomButton from '../customHtmlTags/button';

import {
  CardWrapper,
  ProductName,
  ProductImage,
  ProductMeta,
  MainWrapper,
} from 'styles/productCard.styled';

import { useCart } from 'utils/contexts/cart';

const ProductCard = ({ product }) => {
  const { name, description, imageURL, price } = product;
  const { addToCart } = useCart();

  return (
    <MainWrapper>
      <ProductName>{name}</ProductName>
      <CardWrapper>
        <ProductImage src={imageURL} alt={description} />
        <ProductMeta>
          <div className="product__description">{description}</div>
          <div className="product_purchase">
            <div className="product_purchase_price">{'MPR Rs ' + price}</div>
            <CustomButton
              name="Buy Now"
              className="buy_button_desktop"
              onClick={() => addToCart(product)}
            />
            <div className="buy_button_mobile">
              <CustomButton
                name={'Buy Now @ Rs. ' + price}
                onClick={() => addToCart(product)}
              />
            </div>
          </div>
        </ProductMeta>
      </CardWrapper>
      <div className="buy_button_tablet">
        <CustomButton
          name={'Buy Now @ Rs. ' + price}
          onClick={() => addToCart(product)}
        />
      </div>
    </MainWrapper>
  );
};

export default ProductCard;
