import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import OutsideClickHandler from 'react-outside-click-handler';

import {
  selectCartCount,
  selectCartItems,
  selectCartTotal,
} from '../../store/cart/cart.selector';

import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
  CartDropdownHeading,
  CartDropdownTitle,
  CartOfferClaim,
  CartCheckoutContainer,
  CartCheckoutButton,
} from './cart-dropdown.styles';
import { setIsCartOpen } from '../../store/cart/cart.actions';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems);
  const cartCount = useSelector(selectCartCount);
  const cartTotal = useSelector(selectCartTotal);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  const cartDowndownCloseHandler = () => {
    dispatch(setIsCartOpen(false));
  };

  return (
    <OutsideClickHandler onOutsideClick={cartDowndownCloseHandler}>
      <CartDropdownContainer>
        <CartDropdownHeading>
          <CartDropdownTitle>
            <span> My Cart</span> ({cartCount} items)
          </CartDropdownTitle>
          <div onClick={cartDowndownCloseHandler}> &#10005; </div>
        </CartDropdownHeading>
        <CartItems>
          {cartItems.length ? (
            cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
          ) : (
            <EmptyMessage>Your cart is empty.</EmptyMessage>
          )}
        </CartItems>
        <CartOfferClaim>You wont find it cheaper anywhere.</CartOfferClaim>
        <CartCheckoutContainer>
          <p>Promo code can be applied on payment page</p>
          <CartCheckoutButton
            width="90%"
            buttonType="inverted"
            onClick={goToCheckoutHandler}
          >
            <span> Proceed to Checkout </span>{' '}
            <span>Rs.{cartTotal} &#x0003E;</span>
          </CartCheckoutButton>
        </CartCheckoutContainer>
      </CartDropdownContainer>
    </OutsideClickHandler>
  );
};

export default CartDropdown;
