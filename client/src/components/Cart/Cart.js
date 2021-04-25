import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleCartUpdate } from "../../store/actions/action";
import { useHistory } from "react-router-dom";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  
  const cartItems = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  // close cart
  const handleCloseCart = () => {
    history.push("/products");
  };

  const confirmOrder = () => {
    setTimeout(() => {
      dispatch(handleCartUpdate());
    }, 1000);
  };

  const price = () => {
    let p = 0;
    for (let item of cartItems) {
      p = item.price * item.qty + p;
    }
    return p;
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
              cartItems.map((item) => <CartItem item={item} key={item.id} />)
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
                <Button variant="primary" className=" btn-block btn-checkout">
                  Proceed to Checkout
                  <output className="price">
                    Rs.
                    {price()} {">"}
                  </output>
                </Button>
              </>
            ) : (
              <Button
                variant="primary"
                className=" btn-block "
                onClick={confirmOrder}
              >
                Start Shopping
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
