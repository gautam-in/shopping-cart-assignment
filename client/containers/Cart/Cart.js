import React, { useContext } from "react";
import "./Cart.scss";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItem from "../../components/CartItem/CartItem";
import AuthContext from "../../AuthContext";

const Cart = () => {
  const { userAuthentication } = useContext(AuthContext);
  const history = useHistory();
  const cart = useSelector((state) => state.cart);
  const items = cart.itemsAdded;

  const handleButtonClick = () => {
    if (items.length > 0) {
      userAuthentication === "logged-in"
        ? history.push("/home")
        : history.push("/login");
    } else {
      history.push("/products");
    }
  };

  return (
    <div className="cart">
      {items.length > 0 ? (
        <div className="cart-filled">
          <h2>My Cart</h2>
          <section>
            {items.map((_) => {
              return (
                <div key={_.id} className="item">
                  <CartItem productId={_.id} />
                </div>
              );
            })}
            <div className="advertisement">
              <img
                className="addv-image"
                src="../static/images/lowest-price.png"
                alt="Lowest price gauranteed"
              />{" "}
              you wont find it cheaper anywhere!
            </div>
          </section>
        </div>
      ) : (
        <div className="cart-empty">
          <div>
            <h2>No items in your cart</h2>
            <p>Your favourite items are just a click away</p>
          </div>
        </div>
      )}
      <div className="buttons">
        {/* {items.length > 0 && <p>Promo code can be applied on payment page</p>} */}
        <button
          type="button"
          onClick={handleButtonClick}
          onKeyPress={handleButtonClick}
          tabIndex={0}
        >
          {items.length > 0
            ? `Proceed to checkout Rs.${cart.cartPrice} >`
            : "Start Shopping"}
        </button>
      </div>
    </div>
  );
};

export default Cart;
