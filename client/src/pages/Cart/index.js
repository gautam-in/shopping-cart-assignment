import { useMemo } from 'react';
import { useShopContext } from '../../context';
import classes from './cart.module.scss';
import './cartPopup.scss';
import { CartItem } from './CartItem';

export const Cart = () => {
  const { cart, setIsCartOpen, isCartOpen, increaseQuantity, decreaseQuantity } = useShopContext();

/* Calculating the total price of the items in the cart. */
  const total = useMemo(() => {
    return cart?.reduce((acc, item) => acc + (item.price * item.count), 0);
  }, [cart]);


  return (
    <div className={`${classes.cart} cart_preview ${isCartOpen ? 'active' : ''}`}>
      <div className={classes.cartheader}>
        <p>My Cart</p>
        <button>
          <svg
            onClick={() => setIsCartOpen(false)}
            className={classes.closeicon}
            viewBox="0 0 1024 1024"
            version="1.1"
            alt="Close Cart drawer"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z" />
          </svg>
        </button>
      </div>

      <div className={classes.cartcontent}>
        {cart.length === 0 ? (
          <div className={classes.cart_noitem}>
            <h1>No items in your cart</h1>
            <p>Your favourite items are one click away</p>
          </div>
        ) : (
          <>
            {cart?.map((item) => {
              return (
                <CartItem
                  {...item}
                  key={item.id}
                  increase={increaseQuantity}
                  decrease={decreaseQuantity}
                />
              );
            })}
            <div className={classes.lowestprice_banner}>
              <img src="/static/images/lowest-price.png" alt="lowest price guaranteed" />
              <p>You won't find it cheeper anywhere</p>
            </div>
          </>
        )}
      </div>

      <div className={classes.cartfooter}>
        {cart?.length === 0 ? (
          <button
            className={classes.footerbtn}
            onClick={() => {
              console.log('start shopping');
              setIsCartOpen(false);
            }}>
            Start Shopping
          </button>
        ) : (
          <>
            <p>Promo code can be applied on the payment page</p>
            <button className={classes.footerbtn_checkout} onClick={() => setIsCartOpen(false)}>
              <p>Proceed to Checkout</p>
              <p>
                Rs. {total} {'>'}
              </p>
            </button>
          </>
        )}
      </div>
    </div>
  );
};
