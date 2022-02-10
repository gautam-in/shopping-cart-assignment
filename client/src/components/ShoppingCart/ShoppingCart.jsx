import React, { useEffect } from "react";
import "./ShoppingCart.css";
import { useSelector, useDispatch } from "react-redux";
import { getTotal, setShowCart } from "./../../redux/slices/cartSlice";
import ShoppingCartCard from "./../ShoppingCartCard/ShoppingCartCard";
import Button from "./../Button/Button";
import LowestPrice from "./../../assets/images/lowest-price.png";

function ShoppingCart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotal());
  }, [dispatch, cart]);

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
              <Button className="button" onClick={closeCartHandler}>
                Start Shopping
              </Button>
            </div>
          ) : (
            <div className="cart-items">
              <div className="each-cart-item">
                {cart.cartItems.map((item) => (
                  <ShoppingCartCard key={item.id} item={item} />
                ))}
                <div className="banner">
                  <div className="banner-img">
                    <img src={LowestPrice} alt="Lowest Price" />
                  </div>
                  <div className="banner-desc">
                    <p>You won't find it cheaper anywhere</p>
                  </div>
                </div>
              </div>

              <div className="promo-code">
                <p>Promo code can be applied on payment page</p>
                <Button
                  className="button"
                  type="submit"
                  onClick={closeCartHandler}
                >
                  <p>Proceed to Checkout</p>
                  <span>Rs. {cart.cartTotalAmount}</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
