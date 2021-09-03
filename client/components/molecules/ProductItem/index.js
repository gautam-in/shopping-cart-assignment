import Image from "next/image";
import { useCallback } from "react";
import { useCart } from "../../../global/utils/useCart";
import Button from "../../atoms/Button";
import {
  PriceSection,
  ProductDescription,
  ProductItemWrapper,
} from "./ProductItem.styles";

const ProductItem = ({ productItem }) => {
  if (!productItem.imageURL) return null;

  const { addCartItem } = useCart();
  const labelText = `Buy ${productItem.name} @Rs.${productItem.price}`;

  const handleClick = useCallback(() => {
    addCartItem(productItem);
  });

  return (
    <ProductItemWrapper>
      <ProductDescription>
        <h3 title={productItem.name}>{productItem.name}</h3>
        <div>
          <Image
            src={productItem?.imageURL}
            alt={productItem.name}
            title={productItem.name}
            height="300"
            width="300"
            layout="responsive"
          />
        </div>
        <p>{productItem.description}</p>
      </ProductDescription>
      <PriceSection>
        <p>MRP Rs.{productItem.price}</p>
        <Button
          id={`buy-${productItem.id}`}
          name={labelText}
          aria-label={labelText}
          onClick={handleClick}
        >
          Buy now
        </Button>
      </PriceSection>
    </ProductItemWrapper>
  );
};

export default ProductItem;
