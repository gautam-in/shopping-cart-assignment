import React from "react";
import "./styles.scss";

function Cart({
  cartDetails,
  addToCart,
  removeItemFromCart,
  totalItems,
  toggleCartModalVisibility,
}) {
  const addItem = (itemDetails) => {
    addToCart(itemDetails);
  };

  const removeItem = (itemDetails) => {
    removeItemFromCart(itemDetails);
  };

  const { items = {}, count, totalAmount } = cartDetails || {};
  const cartData = Object.values(items) || [];
  return (
    <div className="cart-wrapper">
      <div className="cart-section">
        <div className="cart-header">
          <p>My Cart ({totalItems} item)</p>
          <button
            onClick={() => toggleCartModalVisibility(true)}
            aria-label="close cart"
          >
            X
          </button>
        </div>
        <ul className="cart-information p0">
          {cartData &&
            cartData.map((product: any, index) => (
              <li className="product-details" key={product.id}>
                <img
                  src={product.imageURL}
                  alt={product.name}
                  loading="lazy"
                  width="45"
                ></img>
                <div className="product-info">
                  <p className="medium dark ">{product.name}</p>
                  <div className="quantity">
                    <button
                      className="cart-btn"
                      onClick={() => removeItem(product)}
                    >
                      <span aria-label="remove item">-</span>
                    </button>
                    <span>{product.count}</span>
                    <button
                      className="cart-btn"
                      onClick={() => addItem(product)}
                    >
                      <span aria-label="add Item">+</span>
                    </button>
                    <span>X</span>
                    <span>
                      {"Rs."}
                      {product.price}
                    </span>
                  </div>
                </div>
                <p>
                  <b>
                    {"Rs."}
                    {product.price * product.count}
                  </b>
                </p>
              </li>
            ))}

          {cartData.length ? (
            <li className="low-price medium tac fontsize14">
              <img
                src="/static/images/lowest-price.png"
                alt="lowest Price Logo"
                loading="lazy"
                width="100"
              ></img>
              <p className="mb0">You Won't find it cheaper anywhere</p>
            </li>
          ) : (
            <li className="empty-cart centre">
              <p>
                <b>No Items in your cart</b>
              </p>
              <p>Your favourite items are just a click away</p>
            </li>
          )}
        </ul>
        <div className="cart-footer centre tac medium">
          {cartData.length ? (
            <>
              <p>Promo Code can be applied to payment page</p>
              <button className="app-btn p5">
                <span>Proceed to Checkout</span>
                <span>
                  Rs :{totalAmount} {">"}
                </span>
              </button>
            </>
          ) : (
            <button className="app-btn centre theme-col medium">
              Start Shopping
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
