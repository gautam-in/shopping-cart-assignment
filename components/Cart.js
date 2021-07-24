import { add } from 'date-fns';
import { useEffect } from 'react/cjs/react.development';
import { useAppData } from '../lib/store';
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
  const { addToCart, changeQuantity } = contextData;

  return (
    <>
      {cartOpen && (
        <CartStyle aria-label="cart" tabIndex="0">
          <header>
            <h3>
              My Cart{' '}
              <span>
                {' '}
                {`(${cart.size} ${cart.size <= 1 ? 'item' : 'items'})`}
              </span>
            </h3>
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
            </CartItemsContainer>
          ) : null}
          <CartFooter>
            <p>hi</p>
            <p>hi</p>
            <p>hi</p>
            <p>hi</p>
          </CartFooter>
        </CartStyle>
      )}
    </>
  );
}

function SingleCartItem({ id, cart, changeQuantity }) {
  return (
    <CartItemStyle>
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
      <ButtonStyle onClick={() => changeQuantity(id, 'substract')}>
        -
      </ButtonStyle>
      <span>{cart.get(id).quantity}</span>
      <ButtonStyle onClick={() => changeQuantity(id, 'add')}>+</ButtonStyle>
      <span>{cart.get(id).price}</span>
    </Quantity>
  );
}
