import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { cartProductQuantity, removeCartProduct } from '../../actions';
import { allCartData } from '../../selector';
import './CartDrawer.scss';

const CartDrawer = React.memo(({ isSlideOpen, cartSideNav }) => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => allCartData(state));

  const cartQuantity = (status, cartProduct) => {
    const { quantity } = cartProduct;
    const quantityHash = status === 'increment' ? quantity + 1 : quantity - 1;
    if (quantityHash < 1) {
      dispatch(removeCartProduct({ ...cartProduct }));
    } else {
      dispatch(cartProductQuantity({ ...cartProduct, quantity: quantityHash }));
    }
  };

  const totalPrice = data.reduce((acc, cartProduct) => {
    const { quantity, price } = cartProduct;
    return acc + quantity * price;
  }, 0);

  const cartList = data.map((cartProduct) => {
    const { id, name, imageURL, quantity, price } = cartProduct;
    return (
      <li key={id} className='cart-item-wrap'>
        <div className='cart-item-main'>
          <div className='cart-image-wrap'>
            <img
              src={
                // eslint-disable-next-line import/no-dynamic-require
                require(`../../../static/images/products/${imageURL}`).default
              }
              alt={name}
            />
          </div>
          <div className='cart-item-details-wrap'>
            <h5>{name}</h5>
            <div>
              <span>
                <button
                  type='button'
                  className='circle-btn'
                  onClick={() => cartQuantity('decrement', cartProduct)}
                >
                  -
                </button>
                {quantity}
                <button
                  type='button'
                  className='circle-btn'
                  onClick={() => cartQuantity('increment', cartProduct)}
                >
                  +
                </button>
              </span>
              <span>X {price}</span>
            </div>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div className='cart-drawer-wrap'>
      <div className='cart-drawer-main'>
        <Modal className='cart-drawer cart-drawer-wrap-modal' isOpen={isSlideOpen}>
          <div className='cart-drawer-cart-header-wrap'>
            <div className='cart-drawer-cart-header-main'>
              <h6>My Cart</h6> <span>( {data.length ? data.length : 0} Items )</span>
              <button type='button' className='close' aria-label='Close' onClick={cartSideNav}>
                <span aria-hidden='true'>
                  <FontAwesomeIcon icon={faTimes} />
                </span>
              </button>
            </div>
          </div>
          <div className='cart-drawer-cart-body-wrap'>
            <div className='cart-drawer-cart-body-main'>
              {data.length ? (
                <div className='cart-list-wrap'>
                  <ul className='clearfix'>{cartList}</ul>
                </div>
              ) : (
                <div className='no-cart-items-found-wrap'>
                  <div className='no-cart-items-found-main'>
                    <h5>No item in your cart</h5>
                    <p>Your favourite items are just a click away</p>
                  </div>
                </div>
              )}
            </div>
            {!!data.length && (
              <div className='cart-drawer-cart-footer-wrap'>
                <button type='button' onClick={cartSideNav}>
                  <span className='checkout-text-wrap'>Proceed to checkout</span>
                  <span className='checkout-price-wrap'>
                    RS.{totalPrice} <FontAwesomeIcon icon={faGreaterThan} />{' '}
                  </span>
                </button>
              </div>
            )}
          </div>
        </Modal>
      </div>
    </div>
  );
});

CartDrawer.propTypes = {
  isSlideOpen: PropTypes.bool.isRequired,
  cartSideNav: PropTypes.func.isRequired
};
export default CartDrawer;
