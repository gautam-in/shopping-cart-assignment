import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-responsive-modal';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import RemoveIcon from '@material-ui/icons/Remove';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import WEB_PATH from '../../routes/webPath';
import images from '../../constants/images';
import { cartActions } from '../../redux/reducers/miniCart';

import 'react-responsive-modal/styles.css';
import './MiniCart.scss';

const MiniCart = ({ isOpen, toggle, miniCart }) => {
  const { totalItems, totalPrice, items } = miniCart;
  const dispatch = useDispatch();
  const history = useHistory();
  const hasItems = !!totalItems;
  const countText = (count) => (count > 1 ? 'items' : 'item');
  const closeModal = () => toggle(false);
  return (
    <div>
      <Modal
        open={isOpen}
        modalId="cart-modal-container"
        classNames={{
          overlay: 'cart-modal-overlay',
          modal: 'cart-modal-container',
        }}
        showCloseIcon={false}
        onClose={closeModal}
        ariaLabelledby="cart-heading"
      >
        <div className="cart-header">
          <h1 id="cart-heading" className="cart-header__title">
            My Cart
            { hasItems && <span className="cart-item-count">{` (${totalItems}) ${countText(totalItems)}`}</span>}
          </h1>
          <CloseIcon className="cart-close-icon" onClick={closeModal} />
        </div>
        {
          !hasItems && (
            <div className="empty-cart">
              <h1>No items in your cart</h1>
              <h2>Your favourite items are just a click away</h2>
            </div>
          )
        }
        {hasItems && (
          <div className="cart-content">
            {
              items.map((item) => {
                const isNotInStock = item.stock - item.count === 0;
                return (
                  <div key={item.id} className="cart-content__container">
                    <img className="cart-content__container--image" src={item.imageURL} alt={item.name} />
                    <div className="cart-content__container--info">
                      <div className="cart-content__container--info-title">
                        <h2>{item.name}</h2>
                        <div className="cart-content__container--info-action">
                          <RemoveIcon
                            className="cart-content-icon cart-content-remove"
                            onClick={() => dispatch(cartActions.removeFromCart(item))}
                          />
                          {item.count}
                          <AddIcon
                            className={`cart-content-icon cart-content-add${isNotInStock ? ' no-stock' : ''}`}
                            onClick={
                              () => (isNotInStock
                                ? null
                                : dispatch(cartActions.addToCart(item)))
                            }
                          />
                          <CloseIcon className="cart-content-cross" />
                          {`Rs.${item.price}`}
                        </div>
                      </div>
                      <span className="cart-content__container--info-mrp">{`Rs.${item.count * item.price}`}</span>
                    </div>
                  </div>
                );
              })
            }
            <div className="cart-promotion">
              <img className="cart-promotion__image" src={images.lowestPriceImage} alt="Lowest price guaranteed" />
              <h3 className="cart-promotion__info">You won&#39;t find it cheaper anywhere</h3>
            </div>

          </div>
        )}
        {
          hasItems && (
            <div className="cart-footer">
              <p>Promo code can be applied on payment page</p>
              <div role="button" className="cart-footer-action" onClick={closeModal} tabIndex={0} aria-hidden="true">
                <span className="cart-footer-action__left">
                  Proceed to Checkout
                </span>
                <span className="cart-footer-action__right">
                  {`Rs.${totalPrice} `}
                </span>
                <span className="cart-footer-action__caret">
                  <NavigateNextIcon />
                </span>
              </div>
            </div>
          )
        }
        {!hasItems && (
          <div className="cart-footer">
            <div className="cart-footer-action">
              <Link
                to={WEB_PATH.PRODUCTS}
                className="cart-footer-action__link"
                onClick={
                  (e) => {
                    e.preventDefault();
                    closeModal();
                    history.push(WEB_PATH.PRODUCTS);
                  }
                }
              >
                Start Shopping
              </Link>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MiniCart;
