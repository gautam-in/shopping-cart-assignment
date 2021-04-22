import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Modal } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faGreaterThan, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { cartProductQuantity, removeCartProduct } from '../../actions';
import { allCartData } from '../../selector';
import LowestPriceTag from '../../../static/images/lowest-price.png';
import './CartDrawer.scss';

const CartDrawer = React.memo(({ isSlideOpen, cartSideNav }) => {
  const dispatch = useDispatch();
  const history = useHistory();

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
        <div className='cart-image-wrap'>
          <img src={require(`../../../static/images/products/${imageURL}`).default} alt={name} />
        </div>
        <div className='cart-item-details-wrap'>
          <h5>{name}</h5>
          <div className='cart-item-price-wrap'>
            <span>
              <button type='button' onClick={() => cartQuantity('decrement', cartProduct)}>
                <FontAwesomeIcon icon={faMinus} />
              </button>
              {quantity}
              <button type='button' onClick={() => cartQuantity('increment', cartProduct)}>
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </span>
            <span>X</span> Rs.{price}
          </div>
          <div className='price-wrap'>Rs. {quantity * price}</div>
        </div>
      </li>
    );
  });

  return (
    <Modal className='cart-drawer-modal' isOpen={isSlideOpen}>
      <div className='cart-drawer-header-wrap'>
        <h6>
          My Cart <span>{data.length ? ` ( ${data.length} Items )` : ''}</span>{' '}
        </h6>
        <button type='button' className='close' aria-label='Close' onClick={cartSideNav}>
          <span aria-hidden='true'>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </button>
      </div>
      {data.length ? (
        <div className='cart-body-main'>
          <div className='cart-list-wrap'>
            <ul className='clearfix'>{cartList}</ul>
            <div className='lowest-price-wrpper'>
              <img src={LowestPriceTag} alt='Lowest Price' />
              <span>You won't find it cheaper anywhere</span>
            </div>
          </div>
        </div>
      ) : (
        <div className='cart-body-wrap'>
          <div className='no-cart-items-wrap'>
            <h5>No item in your cart</h5>
            <p>Your favourite items are just a click away</p>
          </div>
        </div>
      )}
      <div className='cart-footer-wrap'>
        {data.length ? (
          <>
            <div className='cart-footer-text'>Promo code can be applied on payment page</div>
            <button type='button' onClick={cartSideNav}>
              <span className='checkout-text-wrap'>Proceed to Checkout</span>
              <span className='checkout-price-wrap'>
                Rs.{totalPrice} <FontAwesomeIcon icon={faGreaterThan} />
              </span>
            </button>
          </>
        ) : (
          <button
            type='button'
            onClick={() => {
              cartSideNav();
              history.push('/');
            }}
          >
            Start Shopping
          </button>
        )}
      </div>
    </Modal>
  );
});

CartDrawer.propTypes = {
  isSlideOpen: PropTypes.bool.isRequired,
  cartSideNav: PropTypes.func.isRequired
};
export default CartDrawer;
