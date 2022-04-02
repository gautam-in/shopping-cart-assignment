import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateCart, removeCart } from "../../redux/actions/action";

import "./Cart.scss";

const Cart = ({ closeCart }) => {
  const { item, cart } = useSelector((state) => state || {});
  const dispatch = useDispatch();

  const onClose = useCallback(() => {
    closeCart(false);
  }, [closeCart]);

  const handleCartUpdate = useCallback(
    (item) => () => {
      dispatch(updateCart(item));
    },
    [dispatch]
  );

  const handleCartRemove = useCallback(
    (item) => () => {
      dispatch(removeCart(item));
    },
    [dispatch]
  );

  return (
    <div className="overlay">
      <div className="cart-container">
        <div className="header-container">
          <h4 className="heading">
            My cart{" "}
            <span style={{ fontSize: "small" }}>
              {item > 0 ? `( ${item} Item )` : null}
            </span>
          </h4>
          <button className="btn-close" onClick={onClose} />
        </div>

        <ul className="cart_list">
          {cart.length > 0 ? (
            cart.map((item) => (
              <li className="cart_list-item" key={item.id}>
                <img
                  src={item.imageURL}
                  className="cart_list-img"
                  alt={item.name}
                />
                <div className="cart_list-details">
                  <span
                    className="cart_list-name truncate"
                    style={{ display: "block" }}
                  >
                    {item.name}
                  </span>
                  <button
                    className="btn-decrement"
                    onClick={handleCartRemove(item)}
                  >
                    -
                  </button>
                  <span className="quantity">{item.qty}</span>
                  <button
                    className="btn-increment"
                    onClick={handleCartUpdate(item)}
                  >
                    +
                  </button>
                  <span className="into-qty">X</span>
                  <span className="cart_list-price">₹ {item.price}</span>
                  <span className="cart_list-item-total">
                    ₹ {item.qty * item.price}
                  </span>
                </div>
              </li>
            ))
          ) : (
            <div className="no-item-text">
              <b style={{ fontSize: "small" }}>No items in your cart</b>
              <p style={{ fontSize: "small" }}>
                Your favourite items are just a click away
              </p>
            </div>
          )}
        </ul>

        <div className="checkout">
          <p className="checkout-heading" style={{ fontSize: "small" }}>
            Promo code can be applied on the checkout page.
          </p>
          {item > 0 ? (
            <button
              type="button"
              name="button"
              className="btn-cart-checkout checkout-button"
              onClick={onClose}
            >
              <span className="checkout-text">Proceed to checkout</span>
              <span className="checkout-price">
                {" "}
                Rs.{" "}
                {cart.reduce(function (total, item) {
                  return total + item.price * item.qty;
                }, 0)}
              </span>
            </button>
          ) : (
            <button
              type="button"
              name="button"
              className="btn-cart-checkout checkout-button"
              onClick={onClose}
            >
              <span className="checkout-text">Start Shopping</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
