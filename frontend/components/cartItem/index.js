import {
  CartItemWrapper,
  CartItemImage,
  ItemMeta,
  ItemButton,
} from 'styles/cart.styled';

import { useCart } from 'utils/contexts/cart';

const CartItem = ({ cartItem }) => {
  const { imageURL, description, price, quantity, name } = cartItem;
  const { addToCart, removeItemFromCart } = useCart();

  return (
    <CartItemWrapper>
      <CartItemImage src={imageURL} alt={description} />
      <ItemMeta>
        <div className="item__name">{name}</div>
        <div className="item_price_meta">
          <div className="item_price_meta_two">
            <div className="item_quantity">
              <ItemButton
                marginRight="10px"
                onClick={() => removeItemFromCart(cartItem)}
              >
                <i className="fas fa-minus"></i>
              </ItemButton>
              <div>{quantity}</div>
              <ItemButton marginLeft="10px" onClick={() => addToCart(cartItem)}>
                <i className="fas fa-plus"></i>
              </ItemButton>
            </div>
            <div className="times_cart">&times;</div>
            <div className="item_price">{'Rs.' + price}</div>
          </div>
          <div>{'Rs. ' + price}</div>
        </div>
      </ItemMeta>
    </CartItemWrapper>
  );
};

export default CartItem;
