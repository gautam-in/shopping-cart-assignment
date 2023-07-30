import { useCartStore } from "../../../cart.store";
import { Button, Flex } from "../../atoms";
import { CloseIcon } from "../../atoms/icons";
import { Heading } from "../../atoms/typography/heading";
import { Text } from "../../atoms/typography/text";
import { CartItem } from "../../molecules/cart-item";
import { Modal } from "../../molecules/model";

import "./cart-model.scss";

type CartModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function CartModal(props: CartModalProps) {
  const cart = useCartStore((state) => state.cart);
  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const increaseQuantity = useCartStore((state) => state.increaseQuantity);
  const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

  return (
    <Modal
      isOpen={props.isOpen}
      onOutsideClick={props.onClose}
      wrapperId="cart-modal"
      className="cart-model flex flex-col pb-xl "
    >
      <Flex
        p="md"
        justify="between"
        align="center"
        className="cart-model__header"
      >
        <Heading className="color-white" variant="h5">
          My Items
        </Heading>
        <CloseIcon
          className="color-white cursor-pointer"
          onClick={props.onClose}
        />
      </Flex>
      <Flex gap="md" direction="col" className="h-full cart-model__list">
        {cart.length > 0 ? (
          <>
            {cart.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                cartItem={cartItem}
              />
            ))}
            <Flex
              p="xs"
              align="center"
              style={{ background: "var(--color-white)" }}
              gap="md"
            >
              <img src="/images/lowest-price.avif" />
              <Text>You won't find it cheaper anywhere.</Text>
            </Flex>
          </>
        ) : (
          <Flex
            justify="center"
            align="center"
            direction="col"
            gap="sm"
            className="h-full"
          >
            <Heading variant="h3">No items in your cart</Heading>
            <Text>Your favorite items are just a click away.</Text>
          </Flex>
        )}
      </Flex>
      <Flex
        p="md"
        gap="sm"
        direction="col"
        className="w-full cart-model__footer"
      >
        {cart.length > 0 ? (
          <>
            <Text align="center">
              Promo code has been applied on payment page.
            </Text>
            <Button disabled={cartTotal === 0}>
              Proceed to Checkout Rs. {cartTotal}
            </Button>
          </>
        ) : (
          <Button onClick={props.onClose}>Start Shopping</Button>
        )}
      </Flex>
    </Modal>
  );
}
