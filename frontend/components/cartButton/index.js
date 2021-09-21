import { CartButtonWrapper } from 'styles/cart.styled';

import { useCart } from 'utils/contexts/cart';

const CartButton = () => {
  const { _cartItems, openCart } = useCart();

  const noOfItemsInCart = _cartItems.length;

  return (
    <CartButtonWrapper onClick={openCart}>
      <i className="fas fa-shopping-cart" />
      {noOfItemsInCart} items
    </CartButtonWrapper>
  );
};

export default CartButton;
