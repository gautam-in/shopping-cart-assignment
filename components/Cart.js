import Image from 'next/image';
import PropTypes from 'prop-types';
import { useAppData } from '../lib/store';
import { calculateAmount, calculateQuantity } from '../lib/helpers';
import {
  CartStyle,
  CartItemsContainer,
  CartItemStyle,
  CartFooter,
  NoCartItems,
  Quantity,
} from './styles/CartStyle';
import { ButtonStyle } from './styles/GlobalStyles';

export default function Cart() {
  const contextData = useAppData();
  const { cartOpen, cart } = contextData?.data;
  const { changeQuantity, toggleCart } = contextData;
  const totalCart = calculateQuantity(cart);
  return (
    <>
      {cartOpen && (
        <CartStyle aria-label="cart" tabIndex="0">
          <header>
            <h3>
              My Cart{' '}
              <span>
                {`(${totalCart} ${totalCart <= 1 ? 'item' : 'items'})`}
              </span>
            </h3>
            <ButtonStyle onClick={toggleCart} aria-label="close cart">
              X
            </ButtonStyle>
          </header>
          {cart.size === 0 ? (
            <NoCartItems>
              <h3>No items in your cart</h3>
              <p>Your favourite items are just a click away</p>
            </NoCartItems>
          ) : null}
          {cart.size !== 0 ? (
            <CartItemsContainer>
              {[...cart.keys()].map((id) => (
                <SingleCartItem
                  id={id}
                  cart={cart}
                  key={id}
                  changeQuantity={changeQuantity}
                />
              ))}
              <div id="info-label">
                <Image
                  src="/static/images/lowest-price.png"
                  alt="discounts"
                  width={120}
                  height={60}
                />
                <span>you won't find it cheaper anywhere</span>
              </div>
            </CartItemsContainer>
          ) : null}
          <CartFooter method="POST" action="/">
            <p>Promo code can be applied on the checkout page</p>
            <ButtonStyle>
              {totalCart > 0 ? (
                <>
                  {' '}
                  <span>Proceed to Checkout</span>
                  <span>
                    Rs. {calculateAmount(cart)} <i className="arrow right" />
                  </span>{' '}
                </>
              ) : (
                <span id="start-shopping">Start Shopping</span>
              )}
            </ButtonStyle>
          </CartFooter>
        </CartStyle>
      )}
    </>
  );
}

function SingleCartItem({ id, cart, changeQuantity }) {
  return (
    <CartItemStyle tabIndex="0">
      <img src={cart.get(id).imageURL} alt={cart.get(id).name} />

      <div>
        <h3>{cart.get(id).name}</h3>
        <QuantityContainer
          id={id}
          cart={cart}
          changeQuantity={changeQuantity}
        />
      </div>
      <p>Rs. {cart.get(id).price}</p>
    </CartItemStyle>
  );
}
function QuantityContainer({ id, cart, changeQuantity }) {
  return (
    <Quantity>
      <ButtonStyle
        onClick={() => changeQuantity(id, 'substract')}
        aria-label="decrease quantity by 1"
      >
        -
      </ButtonStyle>
      <span>{cart.get(id).quantity}</span>
      <ButtonStyle
        onClick={() => changeQuantity(id, 'add')}
        aria-label="increase quantity by 1"
      >
        +
      </ButtonStyle>
      <span>{cart.get(id).price}</span>
    </Quantity>
  );
}

SingleCartItem.propTypes = {
  id: PropTypes.string,
  cart: PropTypes.object,
  changeQuantity: PropTypes.func,
};
QuantityContainer.propTypes = {
  id: PropTypes.string,
  cart: PropTypes.object,
  changeQuantity: PropTypes.func,
};
