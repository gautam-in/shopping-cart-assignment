import { CartItem, CartStore } from "../../../cart.store";
import { Box, Flex } from "../../atoms";
import { IconButton } from "../../atoms/buttons";
import { MinusIcon, PlusIcon } from "../../atoms/icons";
import { Heading } from "../../atoms/typography/heading";
import { Text } from "../../atoms/typography/text";

import "./cart-item.scss";

type CartItemProducts = {
  cartItem: CartItem;
  increaseQuantity: CartStore["increaseQuantity"];
  decreaseQuantity: CartStore["decreaseQuantity"];
};

export function CartItem(props: CartItemProducts) {
  const { cartItem, increaseQuantity, decreaseQuantity } = props;

  return (
    <Flex px="sm" py="sm" gap="md" className="cart-item">
      <Box className="cart-item__img-container">
        <img
          src={`http://localhost:8000/${cartItem.imageURL}`}
          alt={cartItem.name}
          className="w-full h-full"
        />
      </Box>
      <Flex
        gap="sm"
        direction="col"
        justify="center"
        className="cart-item__description flex-1"
      >
        <Heading variant="h5">{cartItem.name}</Heading>
        <Flex gap="md" align="center" className="cart-item__controls">
          <IconButton
            onClick={() => increaseQuantity(cartItem.id)}
            size="sm"
            isPill
            icon={<PlusIcon />}
            aria-label="Icon Button"
          />
          <Text variant="span">{cartItem.quantity}</Text>
          <IconButton
            onClick={() => {
              decreaseQuantity(cartItem.id);
            }}
            size="sm"
            isPill
            icon={<MinusIcon />}
            aria-label="Icon Button"
          />
          <Text variant="span">X</Text>
          <Text variant="span">Rs. {cartItem.price}</Text>
          <Text variant="span">=</Text>
          <Text variant="span">Rs. {cartItem.price * cartItem.quantity}</Text>
        </Flex>
      </Flex>
    </Flex>
  );
}
