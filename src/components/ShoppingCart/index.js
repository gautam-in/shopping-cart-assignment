import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCart, removeCart } from "../../store/action";

import "./Cart.scss";

const Cart = ({ closeCart }) => {
  const { item, cart } = useSelector((state) => state || {});
  const staticMsgs = {
    noItems: "No items in your cart",
    favItems: "Your favourite items are just a click away",
    pCodes: "Promo code can be applied on the checkout page.",
  };
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
    <div className="cart-container">
      <div className="header-container">
        <h1 className="heading">
          My cart {item > 0 ? `( ${item} Item )` : null}
        </h1>
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
                <h2 className="cart_list-name truncate">{item.name}</h2>
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
            <b>{staticMsgs.noItems}</b>
            <p>{staticMsgs.favItems}</p>
          </div>
        )}
      </ul>

      <div className="checkout">
        <p className="checkout-heading">{staticMsgs.pCodes}</p>
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
  );
};

export default Cart;
