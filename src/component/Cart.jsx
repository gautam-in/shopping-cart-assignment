import React from "react";
import "../stylesheet/custom/cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { addRemoveToCart } from "../redux/cart/actionCreator";
function Cart(props) {
  const cartData = useSelector((state) => state.getCartDetail.cartItems);
  const dispatch = useDispatch();

  const closeCart = () => {
    props.status(false);
  };
  const manageCartItems = (productData, type) => {
    let prodObj = {
      id: productData.id,
      type: type,
    };
    dispatch(addRemoveToCart(prodObj));
  };
  return (
    <div className="app-cart">
      <div className="cart-block">
        <div className="cart-head">
          <p>My Cart ({cartData.length}item)</p>
          <span onClick={closeCart}>X</span>
        </div>
        <div className="cart-mid">
          {cartData &&
            cartData.map((product) => (
              <div className="product-block" key={product.id}>
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
                      onClick={manageCartItems.bind(null, product, "decrement")}
                    >
                      <span>-</span>
                    </button>
                    <span>{product.count}</span>
                    <button
                      className="cart-btn"
                      onClick={manageCartItems.bind(null, product, "increment")}
                    >
                      <span>+</span>
                    </button>
                    <span>x</span>
                    <span>{product.price}</span>
                  </div>
                </div>
                <p>
                  <b>{product.price * product.count}</b>
                </p>
              </div>
            ))}

          {cartData.length > 0 ? (
            <div className="block2">
              <img
                src="/static/images/lowest-price.webp"
                alt="lowest Price Logo"
                loading="lazy"
                width="100"
              ></img>
              <p>You Wont find cheeper anywhere</p>
            </div>
          ) : (
            <div className="centre">
              <p>
                <b>No Items in your cart</b>
              </p>
              <p>Your favourite items are just a click away</p>
            </div>
          )}
        </div>
        <div className="cart-foot centre">
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
        </div>
      </div>
    </div>
  );
}

export default React.memo(Cart);
