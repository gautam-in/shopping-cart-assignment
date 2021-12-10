import React, { useEffect } from "react";
import CartItem from "components/CartItem";
import { useNavigate } from "react-router";
import "./CartPopup.scss";
import Image from "components/HtmlElements/Image";
import { connect } from "react-redux";
import { toggleCart, updateCartItem } from "redux/modules/cart";

function CartPopup({
  toggleCart,
  totalPrice,
  updateCartItem,
  cartItems,
  itemCount,
}) {
  const navigate = useNavigate();
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <>
      <div className="CartPopup--overlay" onClick={toggleCart} />
      <div className="CartPopup">
        <div className="CartPopup__header">
          <p className="CartPopup__count">{`My Cart ${
            itemCount ? `${itemCount} items` : ""
          }`}</p>
          <p onClick={toggleCart} style={{ cursor: "pointer" }}>
            X
          </p>
        </div>
        {itemCount ? (
          <>
            <div className="CartPopup__cartItem-container">
              {cartItems.map((product) => (
                <CartItem
                  product={product}
                  updateQuantity={(product, type) =>
                    updateCartItem(product, type)
                  }
                />
              ))}
            </div>
            <div className="CartPopup__lowestPrice">
              <Image src="/images/lowest-price.png" />
              <p>You won't find it cheaper anywhere</p>
            </div>
            <div className="CartPopup__checkout-container">
              <p className="CartPopup__promo">
                Promo code can be applied on payment page
              </p>
              <button className="CartPopup__checkout-btn">
                <p>Proceed to Checkout</p>
                <p>{`Rs. ${totalPrice} >`}</p>
              </button>
            </div>
          </>
        ) : (
          <div className="CartPopup__empty-container">
            <div className="CartPopup__empty-info">
              <h5>No items in your cart</h5>
              <h6>Your fav items are just a click away</h6>
            </div>
            <button
              className="CartPopup__checkout-btn"
              onClick={() => {
                navigate("/products");
                toggleCart();
              }}
            >
              Start Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default connect(
  ({ cart: { cartItems, itemCount, totalPrice } }) => ({
    cartItems,
    itemCount,
    totalPrice,
  }),
  {
    toggleCart,
    updateCartItem,
  }
)(CartPopup);
