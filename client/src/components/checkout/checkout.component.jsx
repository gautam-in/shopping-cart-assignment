import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../../components/cart-item/cart-item.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import CartFooter from '../../images/lowest-price.png';
import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, history, dispatch }) => {
  return (
    <div className="checkout-container">
      <div className="checkout-heading">
        My Cart{' '}
        <span>
          ({`${cartItems.length} item${cartItems.length > 1 ? 's' : ''}`})
        </span>
      </div>
      <div className="checkout-items">
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id} />
        ))}
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
            {cartItems.length > 0 ? 'Proceed to Checkout' : 'Start shopping'}
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default withRouter(connect(mapStateToProps)(CheckoutPage));
