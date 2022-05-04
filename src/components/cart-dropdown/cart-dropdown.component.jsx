import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react/cjs/react.production.min';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  LowestPrice,
  CartItems,
  CartHeader,
  RemoveButton,
  Promo,
  Footer
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  const closeCart = () => setIsCartOpen(false);

  return (
    <CartDropdownContainer>
      <CartHeader>
        <span>My Cart</span>
        <RemoveButton onClick={closeCart}>&#10005;</RemoveButton>
      </CartHeader>
      <CartItems>
        {cartItems.length > 0 ? (
          <Fragment>
            {cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)}
            <LowestPrice>
              <img src="/static/images/lowest-price.png" alt="Lowest Price Guranteed !" />
              You won't find it cheaper anywhere
            </LowestPrice>
          </Fragment>
        ) : (
          <EmptyMessage>
            <h3>No items in your cart</h3>
            <p>Your favourite items are just a click away</p>
          </EmptyMessage>
        )}
      </CartItems>
      <Footer>
        <Promo>Promo code can be applied on payment page</Promo>
        <Button onClick={goToCheckoutHandler}>
          {
            cartItems.length ?
              "Proceed to checkout" :
              "Start Shopping"
          }
        </Button>
      </Footer>

    </CartDropdownContainer>
  );
};

export default CartDropdown;
