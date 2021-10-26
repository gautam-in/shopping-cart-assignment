import React, { useRef, useEffect } from "react";
import "./cart-modal.scss";
import CartProduct from "./CartProduct";
import Button from "../UI/Button/Button";

function CartModal(props) {
  let windowtoggle = ["backdrop", props.openCart ? "" : "hidden"].join(" ");
  const cartCloseButton = useRef(null);
  useEffect(() => {
    cartCloseButton.current.focus();
  }, []);

  const CheckoutHandler = (e) => {
    if (e.key === "Tab") {
      cartCloseButton.current.focus();
    }
  };

  return (
    <div className={windowtoggle}>
      <div className="cartModalWindow">
        <div
          ref={cartCloseButton}
          tabIndex="-1"
          className="cartModalWindow__container"
          role="dialog"
          aria-modal="true"
        >
          <div className="cartModalWindow__header">
            <div>
              <strong>My Cart</strong>
              {`(${props.noOfCartItems} item)`}
            </div>
            <Button
              styles="cartModalWindow__headerbtn"
              click={props.closeCartWindow}
            >
              x
            </Button>
          </div>
          {props.noOfCartItems ? (
            <div className="cartModalWindow__products">
              {props.addedProductsInCart.map((product) => {
                return (
                  <CartProduct
                    key={product.id}
                    imageUrl={product.imageURL}
                    name={product.name}
                    price={product.price}
                    quantity={product.quantity}
                    removeCartItem={() => props.removeCartItem(product.id)}
                    addCartItem={() => props.addCartItem(product.id)}
                  />
                );
              })}
              <div className="cartModalWindow__banner">
                <h4>Low price</h4>
                <p>you won't find it cheaper anywhere</p>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", paddingTop: "7rem" }}>
              <strong>No items in your cart</strong>
              <br />
              Your favourite items are just a click away
            </div>
          )}
          {props.addedProductsInCart.length === 0 ? (
            <div className="cartModalWindow__footer">
              <Button
                keyDown={CheckoutHandler}
                styles="cartModalWindow__checkout"
                click={props.cartCheckout}
              >
                <span style={{ margin: "auto" }}>Start Shopping</span>
              </Button>
            </div>
          ) : (
            <div className="cartModalWindow__footer">
              <div className="cartModalWindow__promo">
                Promo code can be applied on payment page
              </div>
              <Button
                styles="cartModalWindow__checkout"
                click={props.cartCheckout}
                keyDown={CheckoutHandler}
                ariaLabel={`Total Price for all products is ${props.finalPrice}. Proceed to checkout Page`}
              >
                <span aria-hidden="true"> Proceed to Checkout</span>
                <span aria-hidden="true">{` Rs ${props.finalPrice} >`}</span>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartModal;