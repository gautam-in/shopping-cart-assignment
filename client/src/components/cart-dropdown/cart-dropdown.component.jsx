import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import {
  selectCartCount,
  selectCartItems,
} from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartDropdownHeading,
  CartDropdownTitle,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartDropdownHeading>
        <CartDropdownTitle>
          <span> My Cart</span> ({cartCount} items)
        </CartDropdownTitle>
        <div> &#10005; </div>
      </CartDropdownHeading>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty.</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
