import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import {
  selectCartItems,
  selectCartItemsCount,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import CheckoutItems from "../checkoutItems/checkoutItems.component";
import CustomButton from "../custom-button/custom-button.component";

import "./cart.styles.scss";

const Cart = ({ cartItems, total, itemCount, history, toggleCartHidden }) => {
  return (
    <div id="myModal" className="modal">
      <div className="modal__content">
        <header className="modal__header">
          {itemCount ? (
            <p>My Cart ({itemCount} item)</p>
          ) : (
            <p>My Cart({itemCount} items)</p>
          )}
          <button onClick={toggleCartHidden} className="close">
            &times;
          </button>
        </header>
        <div className="modal__conatiner">
          {cartItems.length ? (
            <>
              {cartItems.map((cartItem) => (
                <CheckoutItems
                  cartItem={cartItem}
                  key={cartItem.id}
                ></CheckoutItems>
              ))}
              <section className="price__logo">
                <img src="/static/images/lowest-price.png" alt="lowest-price" />
                <p>You won't find it cheaper anywhere</p>
              </section>
            </>
          ) : (
            <div className="cart__empty">
              <h2>No items in your cart</h2>
              <p>Your favorite items are just a click away</p>
            </div>
          )}
        </div>

        <footer className="modal__footer">
          {cartItems.length ? (
            <>
              <span className="footer__content">
                Promo card can be apply on the payment page
              </span>
              <button className="button__checkout" onClick={toggleCartHidden}>
                <div>Proceed to Checkout</div>
                <div>Rs. {total} &gt;</div>
              </button>
            </>
          ) : (
            <CustomButton
              className="button__shopping"
              onClick={toggleCartHidden}
            >
              <div>Start Shopping</div>
            </CustomButton>
          )}
        </footer>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
