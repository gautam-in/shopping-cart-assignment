import { CartItem } from "../../../cart.store";
import { Box, Button, Flex } from "../../atoms";
import { Heading } from "../../atoms/typography/heading";
import { Text } from "../../atoms/typography/text";

import "./product-card.scss";

export type Product = {
  category: string;
  description: string;
  id: string;
  imageURL: string;
  name: string;
  price: number;
  sku: string;
  stock: number;
};

export type ProductCardProps = {
  product: Product;
  addToCart: (product: CartItem) => void;
  isProductInCart?: boolean;
};

export function ProductCard(props: ProductCardProps) {
  const { product, addToCart, isProductInCart } = props;

  function addProductToCart() {
    addToCart({
      id: product.id,
      imageURL: product.imageURL,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  const buttonText = isProductInCart
    ? `Added To Cart`
    : `Buy Now @ Rs.${product.price}`;

  return (
    <Flex direction="col" gap="md" p="xs" className="product-card">
      <Heading variant="h4">{product.name}</Heading>
      <Flex gap="md" direction="col" className="product-card__content flex-1">
        <Box className="product-card__img-container">
          <img
            src={`http://localhost:8000/${product.imageURL}`}
            alt={product.name}
            className="w-full h-full"
          />
        </Box>
        <Flex gap="md" className="flex-1" direction="col">
          <Box className="flex-1 product-card__description" p="md">
            <Text className="description" noOfLines={6}>
              {product.description}
            </Text>
          </Box>
          <Button
            onClick={addProductToCart}
            className="none product-card__button--mobile"
            disabled={isProductInCart}
          >
            {buttonText}
          </Button>
        </Flex>
      </Flex>
      <Button
        onClick={addProductToCart}
        disabled={isProductInCart}
        className="product-card__button--desktop"
      >
        {buttonText}
      </Button>
    </Flex>
  );
}
