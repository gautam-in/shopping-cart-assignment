import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addItemsToCart,
  removeItemsFromCart,
} from "../../redux/cart/actionCreator";
import "./Cart.css";

function Cart(props) {
  const cartData = useSelector((state) => state.getCartDetail.cartItems);
  const dispatch = useDispatch();

  // Block background scroll when cart is open
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
      <div className="cart-block">
        <div className="cart-head">
          <p>My Cart ({cartData.length} item)</p>
          <button onClick={() => props.openCart(true)} aria-label="close cart">
            X
          </button>
        </div>
        <ul className="cart-mid">
          {cartData &&
            cartData.map((product, index) => (
              <li className="product-block" key={product.id} tabIndex="0">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  width="45"
                ></img>
                <div className="prod-detail">
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
                    <span>x</span>
                    <span>{product.price}</span>
                  </div>
                </div>
                <p>
                  <b>{product.price * product.count}</b>
                </p>
              </li>
            ))}

          {cartData.length ? (
            <li className="block2" tabIndex="0">
              <img
                src="/static/images/lowest-price.webp"
                alt="lowest Price Logo"
                loading="lazy"
                width="100"
              ></img>
              <p>You Wont find cheeper anywhere</p>
            </li>
          ) : (
            <li className="centre" tabIndex="0">
              <p>
                <b>No Items in your cart</b>
              </p>
              <p>Your favourite items are just a click away</p>
            </li>
          )}
        </ul>
        <div className="cart-foot centre">
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
