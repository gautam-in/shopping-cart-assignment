import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faGreaterThan, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import { cartProductQuantity, removeCartProduct } from '../../../redux/actions';
import { allCartData } from '../../../redux/selector';
import LowestPriceTag from '../../../../static/images/lowest-price.png';
import CartItem from '../../molecules/CartItem';
import './CartDrawer.scss';

const CartDrawer = React.memo(({ isOpen, toogleCart }) => {
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

  const totalPrice =
    data &&
    data.reduce((acc, cartProduct) => {
      const { quantity, price } = cartProduct;
      return acc + quantity * price;
    }, 0);

  const cartList =
    data &&
    data.map((cartProduct) => {
      // const { id, name, imageURL, quantity, price } = cartProduct;
      return (
        <CartItem
          key={cartProduct.id}
          product={cartProduct}
          onClick={(status, product) => cartQuantity(status, product)}
        />
        // <li key={id} className='cart-item-wrap'>
        //   <div className='cart-image-wrap'>
        //     <img
        //       loading='lazy'
        //       src={require(`../../../../static/images/products/${imageURL}`).default}
        //       alt={name}
        //     />
        //   </div>
        //   <div className='cart-item-details-wrap'>
        //     <h5>{name}</h5>
        //     <div className='cart-item-price-wrap'>
        //       <span>
        //         <button type='button' onClick={() => cartQuantity('decrement', cartProduct)}>
        //           <FontAwesomeIcon icon={faMinus} />
        //         </button>
        //         {quantity}
        //         <button type='button' onClick={() => cartQuantity('increment', cartProduct)}>
        //           <FontAwesomeIcon icon={faPlus} />
        //         </button>
        //       </span>
        //       <span>X</span> Rs.{price}
        //     </div>
        //     <div className='price-wrap'>Rs. {quantity * price}</div>
        //   </div>
        // </li>
      );
    });

  return (
    <div className={`cart-modal ${isOpen ? 'show-modal' : ''}`}>
      <div className='modal-container'>
        <div className='modal-content'>
          <div className='cart-header'>
            <h6>
              My Cart <span>{data && data.length ? ` ( ${data.length} Items )` : ''}</span>{' '}
            </h6>
            <div className='close' onClick={toogleCart}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
          {data && data.length ? (
            <div className='cart-body'>
              <ul>{cartList}</ul>
              <div className='lowest-price'>
                <img loading='lazy' src={LowestPriceTag} alt='Lowest Price' />
                <span>You won't find it cheaper anywhere</span>
              </div>
            </div>
          ) : (
            <div className='no-cart-items-body'>
              <h5>No item in your cart</h5>
              <p>Your favourite items are just a click away</p>
            </div>
          )}
          <div className='cart-footer'>
            {data && data.length ? (
              <>
                <div className='cart-footer-text'>Promo code can be applied on payment page</div>
                <button type='button' onClick={toogleCart}>
                  <span className='text'>Proceed to Checkout</span>
                  <span className='price'>
                    Rs.{totalPrice} <FontAwesomeIcon icon={faGreaterThan} />
                  </span>
                </button>
              </>
            ) : (
              <button
                type='button'
                onClick={() => {
                  toogleCart();
                  history.push('/');
                }}
              >
                Start Shopping
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

CartDrawer.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toogleCart: PropTypes.func.isRequired
};
export default CartDrawer;
