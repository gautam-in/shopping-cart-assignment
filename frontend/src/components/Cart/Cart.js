import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getTotal, setShowCart } from "../../features/products/cartSlice";
import CartCard from "../CartCard/CartCard";
import "./Cart.scss";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [cart, dispatch]);

  const closeCartHandler = () => {
    dispatch(setShowCart(false));
  };
  return (
    <div className="cart">
      <div className="overlay">
        <div className="cart-container">
          <div className="cart-header">
            <h2>My Cart</h2>
            <div className="closeNav" onClick={closeCartHandler}>
              <i className="fas fa-times"></i>
            </div>
          </div>

          {cart.cartItems.length === 0 ? (
            <div className="cart-empty">
              <div className="desc-empty">
                <h3>No Items In Your Cart</h3>
                <p>Your favourite items are just a click away</p>
              </div>

              {/* close the overlay  */}
              <div className="button">
                <button type="submit" onClick={closeCartHandler}>
                  Start Shopping
                </button>
              </div>
            </div>
          ) : (
            <div className="cart-items">
              <div className="each-cart-item">
                {
                  // so that code doesnot break
                  cart.cartItems?.map((item) => (
                    <CartCard key={item.id} item={item} />
                  ))
                }
                <div className="banner">
                  <div className="banner-img">
                    <img
                      src={`http://127.0.0.1:5000/static/images/lowest-price.png`}
                      alt=""
                    />
                  </div>
                  <div className="banner-desc">
                    <p>You won't find it cheaper anywhere</p>
                  </div>
                </div>
              </div>

              <div className="promo-code">
                <p>Promo code can be applied on payment page</p>
                <div className="button">
                  <button type="submit" onClick={closeCartHandler}>
                    <p>Proceed to Checkout</p>
                    <span>Rs. {cart.cartTotalAmount}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
