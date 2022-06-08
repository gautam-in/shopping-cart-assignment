import React, { useMemo, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { updateCart } from "../../redux/cart/CartActions";
import "./CartPage.scss";

function CartPage() {
  const dispatch = useDispatch();
  const history = useHistory();

  const cartData = useSelector((state) => state.cart.data);
  const [loading, setLoading] = useState("");

  const addToCart = async (product) => {
    if (!product) {
      return;
    }
    const { id } = product;
    let cart = cartData;
    setLoading(id);
    const response = await fetch(
      `${process.env.REACT_APP_MAIN_URL}/addToCart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response) {
      setLoading("");
      return;
    }
    const reData = await response.json();
    if (reData?.response === "Success") {
      if (Object.entries(cart).length > 0) {
        if (cart[id]) {
          cart = {
            ...cart,
            [id]: { ...cart[id], quantity: cart[id].quantity + 1 },
          };
        } else {
          cart = { ...cart, [id]: { ...product, quantity: 1 } };
        }
      } else {
        cart = { [id]: { ...product, quantity: 1 } };
      }
      dispatch(updateCart(cart));
      localStorage.setItem("cart", JSON.stringify(cart));
      setLoading("");
    }
  };

  const removeFromCart = async (id) => {
    if (!id) {
      return;
    }
    setLoading(id);
    const response = await fetch(
      `${process.env.REACT_APP_MAIN_URL}/addToCart`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response) {
      setLoading("");
      return;
    }
    const reData = await response.json();

    let cart = cartData;
    if (reData?.response === "Success") {
      if (Object.entries(cart).length > 0) {
        if (cart[id]) {
          if (cart[id].quantity > 1) {
            cart = {
              ...cart,
              [id]: { ...cart[id], quantity: cart[id].quantity - 1 },
            };
          } else {
            delete cart[id];
          }
        }
        if (Object.entries(cart).length > 0) {
          dispatch(updateCart(cart));
          localStorage.setItem("cart", JSON.stringify(cart));
        } else {
          dispatch(updateCart({}));
          localStorage.removeItem("cart");
        }
      }
      setLoading("");
    }
  };

  const cartLayout = useMemo(() => {
    if (Object.entries(cartData).length > 0) {
      const tempCart = Object.keys(cartData).map((e) => {
        const { id, name, imageURL, price, quantity } = cartData[e];
        return (
          <li key={id}>
            <img src={imageURL} alt={name}></img>
            <div className="cart-sub-container">
              <h4>{name}</h4>
              <div className="card-button-container2">
                <button
                  onClick={() => removeFromCart(id)}
                  disabled={loading === id}
                >
                  -
                </button>
                <span>
                  {loading === id ? (
                    <ThreeDots
                      className="spinner-position"
                      color="#00BFFF"
                      height={17}
                      width={12}
                    />
                  ) : (
                    quantity
                  )}
                </span>
                <button
                  onClick={() => addToCart(cartData[e])}
                  disabled={loading === id}
                >
                  +
                </button>
                <span>{` X ${price}`}</span>
              </div>
              <span id="totalItemPrice">Rs. {price * quantity}</span>
            </div>
          </li>
        );
      });
      return tempCart;
    }
    return "";
  }, [cartData, loading]);

  const totalPrice = useMemo(() => {
    let priceTemp = 0;
    Object.keys(cartData).forEach((item) => {
      priceTemp = priceTemp + cartData[item].price * cartData[item].quantity;
    });
    return priceTemp;
  }, [cartData]);

  return (
    <div className="cart-main-container">
      <div className="cart-page-header">
        <h3>
          My Cart{" "}
          {Object.entries(cartData).length > 0 && (
            <span>{`( ${Object.entries(cartData).length} items )`}</span>
          )}
        </h3>
      </div>
      {!(Object.entries(cartData).length > 0) && (
        <div className="empty-cart-container">
          <div className="empty-cart-text">
            <h3>No items in your cart</h3>
            <span>Your favorite items are just a click away</span>
          </div>
          <button
            className="payment-button"
            onClick={() => history.push("/products")}
          >
            Start Shopping
          </button>
        </div>
      )}

      {cartLayout && (
        <ul>
          {cartLayout}
          <li>
            <div className="lowest-price-container">
              <img
                src={"/static/images/lowest-price.png"}
                alt="lowest price banner"
              />
              <span>You won't find it cheaper anywhere</span>
            </div>
          </li>
        </ul>
      )}
      {Object.entries(cartData).length > 0 && (
        <div className="payment-button-container">
          <span>Promo code can be applied on payment page</span>
          <button className="payment-button">
            Proceed To Pay<span>{`Rs. ${totalPrice}   >`}</span>
          </button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
