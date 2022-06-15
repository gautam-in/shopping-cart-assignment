/* eslint-disable no-console */
import React from "react";
import { Link } from "react-router-dom";
import { SabkaBazarContext } from "../../store/context";
import Header from "../common/view/header";
import "./cart.css";

const CartPage = () => {
  const { cart, products, addToCart, removeFromCart } =
    React.useContext(SabkaBazarContext);
  const filteredProducts = products.filter((product) => {
    return cart.some((productId) => {
      return product.id === productId;
    });
  });
  console.log(filteredProducts);

  const getNumberOfItems = (id) => {
    return cart.filter((cartId) => cartId === id);
  };
  const calcItemPrice = (id, price) => {
    let itemPrice = getNumberOfItems(id).length * price;
    console.log(itemPrice);
    return itemPrice;
  };
  const totalCount = () => {
    let totalPrice = 0;
    filteredProducts.forEach((cartItem) => {
      totalPrice += calcItemPrice(cartItem.id, cartItem.price);
    });
    return totalPrice;
  };

  return (
    <>
      <Header />
      <main>
        <div className="cart-wrapper">
          <header
            className={`${!filteredProducts.length && `dark-bg`} cart-header `}
          >
            <span>My Cart</span>
            <span> {cart.length ? `(${cart.length} Items)` : ""}</span>
          </header>
          <div
            className={`cart-content ${
              !filteredProducts.length && `empty-cart`
            }`}
          >
            {filteredProducts.length ? (
              filteredProducts.map((cartItems) => (
                <div className="cart-item" key={cartItems.id}>
                  <div className="item-img">
                    <img src={cartItems.imageURL} alt="name" />
                  </div>
                  <div className="item-details">
                    <div className="title">{cartItems.name}</div>
                    <div className="calc">
                      <div className="left">
                        <button
                          className="decrement"
                          onClick={() => removeFromCart(cartItems.id)}
                        >
                          {` - `}
                        </button>
                        <span>{getNumberOfItems(cartItems.id).length}</span>
                        <button
                          className="increment"
                          onClick={() => addToCart(cartItems.id)}
                        >
                          {` + `}
                        </button>
                        &nbsp;
                        <span>X</span>
                        &nbsp;&nbsp;&nbsp;
                        <span>Rs.{cartItems.price}</span>
                      </div>
                      <div className="right">
                        <span>
                          Rs. {calcItemPrice(cartItems.id, cartItems.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <>
                <div>No Items in your Cart</div>
                <div>Your favourite Items are just click away</div>
              </>
            )}
          </div>
          {filteredProducts.length ? (
            <div className="info-item">
              <img
                src="/static/images/lowest-price.png"
                alt="cheap image logo"
              />
              <span>{`You won't find it cheaper anywhere`}</span>
            </div>
          ) : (
            " "
          )}
          <div className="cart-footer">
            {filteredProducts.length ? (
              <>
                <div className="desc">
                  Promo code can be applied on payment page
                </div>
                <button>
                  <span>Proceed To Checkout</span>
                  <span>Rs.{totalCount()} </span>
                </button>
              </>
            ) : (
              <button className="empty-cart-action">
                <Link to="/product">
                  <span>Start Shopping</span>
                </Link>
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
};
export default CartPage;
