import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updateCart, removeCart } from "../../store/action/action";

function Cart(props) {
  const { item, cart } = useSelector((state) => state);
  const dispatch = useDispatch();
  function closeCart() {
    props.closeCart(false);
  }
  function checkout(){
    alert('User clicked on Checkout') 
  }
  return (
    <div className="cart-wrapper">
      <div className="header-container">
        <h1 className="heading">
          My cart {item > 0 ? `( ${item} Item )` : null}
        </h1>
        <a
          name="button"
          className="btn-close"
          aria-label="Close"
          onClick={closeCart}
        ></a>
      </div>

      <ul className="cart_list">
        {cart.length > 0 ? (
          cart.map((item) => (
            <li
              className="cart_list-item"
              key={item.id}
              data-product-id={item.id}
            >
              <img
                src={item.imageURL}
                className="cart_list-img"
                alt={item.name}
              />
              <div className="cart_list-details">
                <h2 className="cart_list-name truncate">{item.name}</h2>
                <a
                  href="#"
                  role="button"
                  className="btn-increment"
                  data-product-id={item.id}
                  onClick={() => {
                    dispatch(updateCart(item));
                  }}
                >
                  +
                </a>
                <span className="quantity">{item.qty}</span>
                <a
                  href="#"
                  role="button"
                  className="btn-decrement"
                  data-product-id={item.id}
                  onClick={() => {
                    dispatch(removeCart(item));
                  }}
                >
                  -
                </a>
                <span className="into-qty">X</span>
                <span className="cart_list-price">Rs. {item.price}</span>
                <span className="cart_list-item-total">
                  Rs.{item.qty * item.price}
                </span>
              </div>
            </li>
          ))
        ) : (
          <div style={{ textAlign: "center" }}>
            <b>No items in your cart</b>
            <p>Your favourite items are just a click away</p>
          </div>
        )}
      </ul>

      <div className="checkout">
        <p className="checkout-heading">
          Promo code can be applied on the checkout page.
        </p>
        {item > 0 ? (
          <button
            type="button"
            name="button"
            className="btn-cart-checkout checkout-button"
            onClick={checkout}
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
            onClick={checkout}
          >
            <span className="checkout-text">Start Shopping</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default Cart;
