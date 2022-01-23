import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemsToCart,
  removeItemsFromCart,
} from "../../redux/cart/actionCreator";
import "./Cart.css";

function Cart(props) {
  const cartData = useSelector((state) => state.getCartDetails.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  const addItem = (productData) => {
    let prodObj = {
      id: productData.id,
    };
    dispatch(addItemsToCart(prodObj));
  };

  const removeItem = (productData) => {
    let prodObj = {
      id: productData.id,
    };
    dispatch(removeItemsFromCart(prodObj));
  };

  return (
    <div className="app-cart">
      <div className="cart-section">
        <div className="cart-header">
          <p>My Cart ({cartData.length} item)</p>
          <button onClick={() => props.openCart(true)} aria-label="close cart">
            X
          </button>
        </div>
        <ul className="cart-information">
          {cartData &&
            cartData.map((product, index) => (
              <li className="product-details" key={product.id} tabIndex="0">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width="45"
                ></img>
                <div className="product-info">
                  <p>{product.name}</p>
                  <div className="quantity">
                    <button
                      className="cart-btn"
                      onClick={removeItem.bind(null, product)}
                    >
                      <span aria-label="remove item">-</span>
                    </button>
                    <span>{product.count}</span>
                    <button
                      className="cart-btn"
                      onClick={addItem.bind(null, product)}
                    >
                      <span aria-label="add Item">+</span>
                    </button>
                    <span>X</span>
                    <span>{product.price}</span>
                  </div>
                </div>
                <p>
                  <b>{product.price * product.count}</b>
                </p>
              </li>
            ))}

          {cartData.length ? (
            <li className="low-price" tabIndex="0">
              <img
                src="/static/images/lowest-price.png"
                alt="lowest Price Logo"
                loading="lazy"
                width="100"
              ></img>
              <p>You Won't find it cheaper anywhere</p>
            </li>
          ) : (
            <li className="empty-cart centre" tabIndex="0">
              <p>
                <b>No Items in your cart</b>
              </p>
              <p>Your favourite items are just a click away</p>
            </li>
          )}
        </ul>
        <div className="cart-footer centre">
          {cartData.length ? (
            <>
              <p>Promo Code can be applied to payment page</p>
              <button className="app-btn">
                <span>Proceed to Checkout</span>
                <span>
                  Rs :
                  {Object.values(cartData).reduce(
                    (t, { price, count }) => t + price * count,
                    0
                  )}
                </span>
              </button>
            </>
          ) : (
            <button className="app-btn centre">Start Shopping</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default React.memo(Cart);