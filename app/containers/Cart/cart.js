import { CartStyles, NoItems } from './cart.styles';
import { useDispatch, useSelector } from 'react-redux';
import CartItem from '../../components/CartItem';
import CustomButton from '../../components/Shared/CustomButton';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setCartOpen } from '../../../store/actions';
import { useEffect, useRef } from 'react';

const Cart = () => {
  const cartRef =useRef()
  const cartOpen = useSelector((state) => state.cart.cartOpen);
  const cartItems = useSelector((state) => state.cart.cartItems?.cart);
  const totalPrice = useSelector((state) => state.cart.cartItems?.totalPrice);
  const dispatch = useDispatch();
  useEffect(() => {
    const bodyClick = (event) => {
      if (cartRef.current.contains(event.target) || event.target.contains(document.getElementById('cartBtn')) )return;
        dispatch(setCartOpen(false));
    };
    document.body.addEventListener('click', bodyClick, { capture: true });
    return () => {
      document.body.removeEventListener('click', bodyClick, { capture: true });
    };
  }, []);
  const renderCartItems = (cartItems) => {
    return cartItems.map((cartItem) => (
      <CartItem key={cartItem.id} addedProduct={cartItem}/>
    ));
  };
  return (
    <CartStyles open={cartOpen} ref={cartRef}>
      <header>
        <h4>My Cart {cartItems ? `(${cartItems.length} items)` : ''} </h4>
        <FontAwesomeIcon
          icon={faTimes}
          onClick={() => dispatch(setCartOpen(false))}
        />
      </header>
      {cartItems?.length > 0 ? (
        <>
          <main>{renderCartItems(cartItems)}</main>
          <section>
            <img
              src="/static/images/lowest-price.png"
              alt="lowest price image"
            />
            <p>{`You won't find it cheaper anywhere `}</p>
          </section>
          <footer>
            <p>Promo code can be applied on payment page</p>
            <CustomButton
              text={
                <>
                  Proceed to checkout <span> Rs. {totalPrice}</span>
                </>
              }
              classes="checkout-btn"
            />
          </footer>
        </>
      ) : (
        <>
          <NoItems>
            <h2>No items in the card</h2>
            <p>your favourite items are just click away</p>
          </NoItems>
          <footer>
            <CustomButton
              text={`start shopping`}
              classes="start-shopping-btn"
            />
          </footer>
        </>
      )}
    </CartStyles>
  );
};

export default Cart;
