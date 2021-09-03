import Image from "next/image";
import { useCallback } from "react";
import { useCart } from "../../../global/utils/useCart";
import Button from "../../atoms/Button";
import {
  CartItemCount,
  CartItemDescription,
  CartItemWrapper,
  Container,
} from "./CartItem.styles";

const CartItem = ({ cartItem }) => {
  const { cartOpen, addCartItem, removeCartItem } = useCart();

  const handleAddCartItem = useCallback(() => {
    addCartItem(cartItem);
  });

  const handleRemoveCartItem = useCallback(() => {
    removeCartItem(cartItem.id);
  });

  return (
    <CartItemWrapper>
      <Container>
        <div>
          <Image
            src={cartItem.imageURL}
            height={50}
            width={50}
            alt={cartItem.name}
          />
        </div>
        <CartItemDescription>
          <h5>{cartItem.name}</h5>
          <CartItemCount>
            <Button
              name="remove item"
              onClick={handleRemoveCartItem}
              tabIndex={cartOpen ? "0" : "-1"}
            >
              -
            </Button>
            <span>{cartItem.count}</span>
            <Button
              name="add item"
              onClick={handleAddCartItem}
              tabIndex={cartOpen ? "0" : "-1"}
            >
              +
            </Button>
            <span>X </span> <span> Rs.{cartItem.price}</span>
          </CartItemCount>
        </CartItemDescription>
      </Container>

      <div>Rs.{+cartItem.price * +cartItem.count}</div>
    </CartItemWrapper>
  );
};

export default CartItem;
