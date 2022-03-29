import React from 'react';
import PropTypes from 'prop-types';

// components
import CartCard from '../components/Cart/CartCard';
import { AiOutlineClose } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';

/**
 * @name Cart
 * @param {array} data Products to show in Cart Page
 * @param {boolean} showCart Flag for showing/hiding the Cart Modal
 * @param {func} setShowCart Function for setting the showCart flag value
 * @returns JSX for Cart Page
 */
const Cart = ({ data, showCart, setShowCart, buyButtonHandler }) => {
  const computeTotalCartPrice = () => {
    const totalPrice = data.reduce(
      (prevValue, currValue) => prevValue + currValue.price * currValue.noOfPeices,
      0
    );
    return totalPrice;
  };

  return (
    <>
      {showCart && (
        <div className="cart">
          <div className="cart__content">
            <div className="cart__header">
              <h4 className="cart__header__title">
                <span>My Cart</span>
                <span>({data?.length} items)</span>
              </h4>
              <AiOutlineClose className="cart__header__icon" onClick={() => setShowCart(false)} />
            </div>
            {data.length > 0 ? (
              <div className="cart__body">
                {data?.map((e) => (
                  <CartCard key={e.id} product={e} buttonHandler={buyButtonHandler} />
                ))}
                <div className="cart__body__lowest-price-banner">
                  <img src="/images/lowest-price.png" alt="lowest price guaranteed" />
                  <span>You won&#39;t find it cheaper anywhere</span>
                </div>
              </div>
            ) : (
              <div className="cart__body empty-cart__body">
                <h2>No items in your cart</h2>
                <p>Your favorite items are just a click away</p>
              </div>
            )}
            <div className="cart__footer">
              {data.length > 0 ? (
                <>
                  <p className="cart__promocode">Promo code can be applied on payment page</p>
                  <button className="cart__button" onClick={() => setShowCart(false)}>
                    <span>Proceed to Checkout</span>
                    <div className="cart__button__total-price">
                      <span>{computeTotalCartPrice()}</span>
                      <IoIosArrowForward className="cart__button__total-price__icon" />
                    </div>
                  </button>
                </>
              ) : (
                <button
                  className="cart__button empty-cart__button"
                  onClick={() => setShowCart(false)}>
                  Start Shopping
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

Cart.propTypes = {
  data: PropTypes.array,
  showCart: PropTypes.bool,
  setShowCart: PropTypes.func,
  buyButtonHandler: PropTypes.func
};

export default Cart;
