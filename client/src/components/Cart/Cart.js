import { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './Cart.module.scss';
import ShopContext from '../../contexts/ShopContext';
import { useNavigate } from 'react-router-dom';

import Modal from '../Modal/Modal';

const Cart = ({ onClose }) => {
  const navigate = useNavigate();
  const Shop = useContext(ShopContext);

  const handleStartShopping = () => {
    onClose();
    navigate('/products');
  };
  return (
    <Modal type="cart" onClose={onClose}>
      {Shop.cartItems.length === 0 ? (
        <div className={styles['cart-container']}>
          <div className={styles['cart-header']}>
            <div>My Cart</div>
            <div className={styles['cart-close']} onClick={() => onClose()}>
              X
            </div>
          </div>
          <p className={styles['cart-empty']}>
            <strong>No items in your cart</strong>
            <br />
            <small>Your favourite items are just a click away</small>
          </p>
          <div className={styles['start-shopping']}>
            <button className={styles['start-shopping-btn']} onClick={handleStartShopping}>
              Start Shopping
            </button>
          </div>
        </div>
      ) : (
        <div className={styles['cart-container']}>
          <div className={styles['cart-header']}>
            <div>My Cart ({Shop.count} item)</div>
            <div className={styles['cart-close']} onClick={() => onClose()}>
              X
            </div>
          </div>
          <div className={styles['items-container']}>
            {Shop.cartItems.map((item) => (
              <div key={item.id} className={styles['item-container']}>
                <img src={item.imageURL} alt={item.name} />
                <div className={styles['item-discription']}>
                  <h6>{item.name}</h6>
                  <div className={styles['price-row']}>
                    <div className={styles['price-row-left']}>
                      <button onClick={() => Shop.removeCartItem(item)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => Shop.updateCartItems(item)}>+</button>
                      <span>x</span>
                      <span>{`Rs.${item.price}`}</span>
                    </div>
                    <span>{`Rs.${item.price * item.quantity}`}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={styles['discount-container']}>
            <img src="static/images/lowest-price.png" alt="lowest price banner" />
            <p>You won&lsquo;t find it cheaper anywhere</p>
          </div>
          <div className={styles['checkout-container']}>
            <p>Promo Code can be applied on payment page</p>
            <div className={styles['checkout-btn']} onClick={() => onClose()}>
              <div>Procced to checkout</div>
              <div>
                Rs.{Shop.cartTotal} <span>{'>'}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default Cart;

Cart.propTypes = {
  onClose: PropTypes.func
};
