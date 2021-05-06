import React from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/header";
import CartItem from "../../components/cartItem";
import Button from "../../components/common/button";

import "./index.scss";

import label from "./data/index.json";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const history = useHistory();

  // close cart
  const handleCloseCart = () => {
    history.push("/products");
  };

  const handleStarShopping = () => {
    history.push("/products");
  };

  return (
    <>
      <Header />
      <div className="container-fluid cart-container">
        <div className="cart-card">
          <div className="cart-header">
            <h4 className="cart-title">
              {`${label.title} `}
              {cartItems?.length > 0 && (
                <span className="item-count">{`( ${
                  cartItems ? cartItems.length : 0
                } ${label.itemLabel} )`}</span>
              )}
            </h4>
            <span className="close_button_container">
              <svg
                viewBox="0 0 329.26933 329"
                height="12"
                width="12"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="close"
                onClick={handleCloseCart}
              >
                <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
              </svg>
            </span>
          </div>
          <div className="cart-body">
            {cartItems?.length > 0 ? (
              cartItems.map((item) => <CartItem item={item} key={item.id} />)
            ) : (
              <div className="empty_cart_title_container">
                <h4 className="empty_cart_title">
                  {label.cartItemEmptyLabel}
                </h4>
                <p>{label.favoriteItemLabel}</p>
              </div>
            )}
            {cartItems?.length > 0 && (
              <div className="cart-banner">
                <img
                  loading="lazy"
                  src="static/images/lowest-price.png"
                  alt="lowest-price"
                />
                <span>{label.bestBuyLabel}</span>
              </div>
            )}
          </div>
          <div className="cart-footer">
            {cartItems?.length > 0 ? (
              <>
                <div className="promo_code_desc">
                  {label.promoCodeApplyLabel}
                </div>
                <Button variant="primary" className=" btn-block btn-checkout">
                  {label.proceedToCheckoutLabel}
                  <span className="price">
                    {`${label.priceLabel} `}
                    {cartItems?.length > 0 &&
                      cartItems.reduce(
                        (total, current) =>
                          total + current.count * current.price,
                        0
                      )}
                  </span>
                </Button>
              </>
            ) : (
              <Button
                variant="primary"
                className="btn-block"
                onClick={handleStarShopping}
              >
                {label.continueShoppingLabel}
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
