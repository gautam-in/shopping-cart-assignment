import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <img src="/static/images/cart.svg" alt="Shopping Icon" />
      <ItemCount>{cartCount} Items</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
