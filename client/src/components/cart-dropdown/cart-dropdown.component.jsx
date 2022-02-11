import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Modal } from 'react-bootstrap';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartFooter from '../../images/lowest-price.png';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems, history, dispatch, show, setShow }) => {
  return (
    <div>
      <Modal
        show={show}
        onHide={() => {
          setShow(false);
          dispatch(toggleCartHidden());
        }}
        backdrop="static"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            My Cart{' '}
            <span>
              ({`${cartItems.length} item${cartItems.length > 1 ? 's' : ''}`})
            </span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="cart-items">
            {cartItems.length ? (
              cartItems.map((cartItem) => (
                <>
                  <CartItem key={cartItem.id} item={cartItem} />
                </>
              ))
            ) : (
              <span className="empty-message">
                <span>No Items in your cart</span>
                <span>Your favorite items are just a click away</span>
              </span>
            )}
            {cartItems.length > 0 && (
              <div className="cart-footer">
                <div className="footer-message">
                  <img src={CartFooter} alt="" />
                  <span>You won't find it cheaper anywhere</span>
                </div>
              </div>
            )}
            <div className="checkout-button">
              <span className="message">
                Promo code can be applied on payment page
              </span>
              <CustomButton
                onClick={() => {
                  if (window.screen.width < 1024) {
                    if (cartItems.length > 0) {
                      history.push('/checkout');
                    } else {
                      history.push('/products');
                    }
                    dispatch(toggleCartHidden());
                  }
                }}
              >
                {cartItems.length > 0
                  ? 'Proceed to Checkout'
                  : 'Start shopping'}
              </CustomButton>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
