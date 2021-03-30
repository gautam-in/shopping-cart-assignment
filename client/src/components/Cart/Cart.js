import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQtyStart,
  decrementQtyStart,
} from "../Products/ProductActions";
function Cart() {
  const { cartItems } = useSelector((state) => state.product);
  const history = useHistory();
  const dispatch = useDispatch();

  // close cart
  const handleCloseCart = () => {
    history.push("/products");
  };

  // increment cart item qty
  const handleIncrementItemQty = (payload) => {
    dispatch(incrementQtyStart(payload));
  };

  // decrement cart item qty
  const handleDecrementItemQty = (payload) => {
    dispatch(decrementQtyStart(payload));
  };
  return (
    <div className="cart-overlay">
      <div className="container cart-container">
        <div className="cart-card">
          <div className="cart-header">
            <h4 className="cart-title">
              My Cart{" "}
              {cartItems?.length > 0 && (
                <span>({cartItems ? cartItems.length : 0} items)</span>
              )}
            </h4>
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
          </div>
          <div className="cart-body">
            {cartItems?.length > 0 ? (
              cartItems.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-item-image">
                    <img
                      className="img-fluid"
                      src={item.imageURL}
                      alt={item.name}
                    />
                  </div>
                  <div className="cart-item-info">
                    <div className="cart-item-title">{item.name}</div>
                    <div className="cart-item-calculation">
                      <button
                        className="button btn btn-primary btn-rounded"
                        onClick={() => handleDecrementItemQty(item)}
                        disabled={item.count <= 1}
                      >
                        -
                      </button>
                      <span>{item.count}</span>
                      <button
                        className="button btn btn-primary btn-rounded"
                        onClick={() => handleIncrementItemQty(item)}
                      >
                        +
                      </button>
                      <span>x</span>
                      <span>Rs.{item.price}</span>
                      <div className="total ml-auto">
                        Rs.{item.count * item.price}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="m-auto text-center">
                <div className="cart-item-title">No items in your cart</div>
                <p>Your favorite items are just a click away</p>
              </div>
            )}
            {cartItems?.length > 0 && (
              <div className="cart-banner">
                <img src="static/images/lowest-price.png" alt="lowest-price" />
                <span>You won't find it cheaper anywhere</span>
              </div>
            )}
          </div>
          <div className="cart-footer">
            {cartItems?.length > 0 ? (
              <>
                <div className="mb-1 text-center">
                  Promo can be applied on payment page
                </div>
                <button className="btn btn-primary btn-block btn-checkout">
                  Proceed to Checkout
                  <span className="price">
                    Rs.
                    {cartItems?.length > 0 &&
                      cartItems.reduce(
                        (total, current) =>
                          total + current.count * current.price,
                        0
                      )}{" "}
                    {">"}
                  </span>
                </button>{" "}
              </>
            ) : (
              <button
                className="btn btn-primary btn-block"
                onClick={() => history.push("/products")}
              >
                Start Shopping
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
