import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { updateCart } from "../../redux/cart/CartActions";

function ProductItem({ product }) {
  const dispatch = useDispatch();
  const { name, description, imageURL, price, id } = product;
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(false);
  const cartData = useSelector((state) => state.cart.data);

  useEffect(() => {
    if (Object.entries(cartData).length > 0 && cartData[id]) {
      setQuantity(cartData[id]?.quantity);
    }
  }, []);

  const addToCart = async () => {
    let cart = cartData;
    setLoading(true);
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
      setLoading(false);
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
      setQuantity(cart[id].quantity);
      dispatch(updateCart(cart));
      localStorage.setItem("cart", JSON.stringify(cart));
      setLoading(false);
    }
  };

  const removeFromCart = async () => {
    setLoading(true);
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
      setLoading(false);
      return;
    }
    const reData = await response.json();
    if (reData?.response === "Success") {
      let cart = cartData;
      if (Object.entries(cart).length > 0) {
        if (cart[id]) {
          if (cart[id].quantity > 1) {
            cart = {
              ...cart,
              [id]: { ...cart[id], quantity: cart[id].quantity - 1 },
            };
            setQuantity(cart[id].quantity);
          } else {
            delete cart[id];
            setQuantity(0);
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
      setLoading(false);
    }
  };

  return (
    <div className="product-card-container" key={id}>
      <h4>{name}</h4>
      <div className="product-mobile-view">
        <img src={imageURL} alt={name} />
        <div className="desctiption-container">
          <div className="product-description">{description}</div>
          <div className="card-button-container">
            <span id="price">MRP Rs.{price}</span>
            {quantity === 0 && (
              <button onClick={addToCart}>
                Buy Now <span id="buttonPrice">{`@ ${price}`}</span>
              </button>
            )}
            {quantity > 0 && (
              <div className="card-button-container2">
                <button onClick={removeFromCart} disabled={loading}>
                  -
                </button>
                <span>
                  {loading ? (
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
                <button onClick={addToCart} disabled={loading}>
                  +
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
