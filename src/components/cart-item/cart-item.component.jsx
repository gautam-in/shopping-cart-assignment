import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import { CartItemContainer, ItemDetails, BaseSpan, Quantity, Circle, Value, Price } from './cart-item.styles';

const CartItem = ({ cartItem }) => {
  const { name, imageURL, price, quantity } = cartItem;
  const { addItemToCart, removeItemToCart } =
    useContext(CartContext);

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  return (
    <CartItemContainer>
      <img src={imageURL} alt={`${name}`} />
      <ItemDetails>
        <BaseSpan>{name}</BaseSpan>
        <Quantity>
          <Circle onClick={removeItemHandler}>-</Circle>
          <Value>{quantity}</Value>
          <Circle onClick={addItemHandler}>+</Circle>
          <Price>x ${price}</Price>
        </Quantity>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
