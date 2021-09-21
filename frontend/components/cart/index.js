import CartItem from 'components/cartItem';
import CheckoutButton from 'components/checkout';

import {
  CartWrapper,
  BlackBackground,
  CartItemsWrapper,
  CheapPriceWrapper,
  CheapPriceContent,
} from 'styles/cart.styled';
import { CloseButton } from 'styles/global.styled';

import { useCart } from 'utils/contexts/cart';

const Cart = () => {
  const { _cartItems, _cartTotal, closeCart, cartOpen } = useCart();

  return (
    <>
      <BlackBackground open={cartOpen} />
      <CartWrapper open={cartOpen}>
        <header>
          <div>
            My Cart <span> ({_cartItems.length} Items)</span>
          </div>
          <CloseButton onClick={closeCart}>&times;</CloseButton>
        </header>
        <CartItemsWrapper>
          {_cartItems && _cartItems.length > 0 ? (
            <>
              {_cartItems.map((cartItem) => (
                <CartItem cartItem={cartItem} />
              ))}

              <CheapPriceWrapper>
                <CheapPriceContent>
                  <img
                    src="/static/images/lowest-price.png"
                    alt="Lowest Price"
                  />
                  <div>You won't find it cheaper anywhere</div>
                </CheapPriceContent>
              </CheapPriceWrapper>
            </>
          ) : (
            <div className="no_item">
              <div className="no_item_header">No Items in your cart</div>
              <div>You favorite items are just click away</div>
            </div>
          )}
        </CartItemsWrapper>
        <footer>
          {_cartItems.length > 0 && (
            <p>Promo Code can be applied on payment page</p>
          )}
          <CheckoutButton
            noOfItems={_cartItems.length}
            total={_cartTotal}
            closeCart={closeCart}
          />
        </footer>
      </CartWrapper>
    </>
  );
};

export default Cart;
