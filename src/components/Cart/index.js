import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useViewport } from "../../hooks/useDevice";

const Button = React.lazy(() =>
  import(/* webpackChunkName: "CartButtonComponent" */ "../Button")
);
const CartItem = React.lazy(() =>
  import(/* webpackChunkName: "CartCartItemComponent" */ "../CartItem")
);
const Text = React.lazy(() =>
  import(/* webpackChunkName: "CartTextComponent" */ "../Text")
);

import { toggleCartModal } from "../../redux/actions/cartActions";

import "./style.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const { isDesktop } = useViewport();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItemsCount = useSelector((state) => state.cart.cartItemsCount);
  const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice);
  const isCartModalOpen = useSelector((state) => state.cart.isCartModalOpen);
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = isCartModalOpen ? "hidden" : "auto";
  }, [isCartModalOpen]);
  const clickHandlerCloseButton = () => {
    dispatch(toggleCartModal());
  };
  return (
    <>
      <div
        className={`overlay ${isCartModalOpen ? "open" : ""}  ${
          isDesktop ? "desktop" : ""
        }`}
      ></div>
      {isCartModalOpen ? (
        <div
          aria-label="You have opened the cart"
          className="sr-only"
          role="alert"
        ></div>
      ) : null}
      <div className={`cart-container ${isCartModalOpen ? "open" : ""}`}>
        <header className="cart-container__header">
          <Text
            ariaLabel={`You have ${cartItemsCount} items in your cart`}
            role="heading"
            tabIndex="0"
          >
            My Cart{cartItemsCount ? ` (${cartItemsCount} items)` : ""}
          </Text>
          <button
            aria-label="Close Cart"
            onClick={clickHandlerCloseButton}
            role="button"
            tabIndex="0"
          >
            x
          </button>
        </header>
        {cartItemsCount ? (
          <>
            <div className="cart-container__filledCartContainer">
              <div className="cart-container__filledCartContainer__cartItems">
                {cartItems.map((cartItem) => (
                  <CartItem cartItem={cartItem} key={cartItem.id} />
                ))}
              </div>
              <div
                aria-label="Lowest price guaranteed - you wont find it cheaper anywhere"
                className="cart-container__filledCartContainer__lowestPriceContainer"
                tabIndex="0"
              >
                <div className="cart-container__filledCartContainer__lowestPriceContainer__image">
                  <img
                    src="/static/images/lowest-price.png"
                    alt="Lowest Price Guranteed"
                  />
                </div>
                <div className="cart-container__filledCartContainer__lowestPriceContainer__text">
                  <Text>You won't find it cheaper anywhere</Text>
                </div>
              </div>
            </div>
            <div className="cart-container__checkoutCartContainer">
              <div
                aria-label="Promo code can be applied on payment page"
                className="cart-container__checkoutCartContainer__promoTextContainer"
                tabIndex="0"
              >
                <Text>Promo code can be applied on payment page</Text>
              </div>
              <div className="cart-container__checkoutCartContainer__checkoutButtonContainer">
                <Button
                  ariaLabel={`Press enter or click button to proceed to checkout with cart items worth rupees ${cartTotalPrice}`}
                  className="checkoutButton"
                  onClick={clickHandlerCloseButton}
                >
                  <Text>Proceed to Checkout</Text>
                  <Text>{`Rs ${cartTotalPrice} ${"\u00A0"} >`}</Text>
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="cart-container__emptyCartContainer">
            <div className="cart-container__emptyCartContainer__textContainer">
              <Text>No items in your cart</Text>
              <Text>Your favorite items are just a click away</Text>
            </div>
            <div className="cart-container__emptyCartContainer__buttonContainer">
              <Button onClick={clickHandlerCloseButton}>Start Shopping</Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
