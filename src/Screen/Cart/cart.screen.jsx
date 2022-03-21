import React from "react";
import ProductTile from "../../Component/ProductTile/producttile.component";
import "./cart.styles.scss";

function Cart(props) {
  const { setCartStatus, addItemsToCart, reduceItemsToCart, cartStatus } =
    props;

  const { cart_items, show_cart } = cartStatus;

  const closeCart = () => {
    setCartStatus();
  };

  const addItems = (item) => {
    addItemsToCart(item);
  };

  const reduceItems = (item) => {
    reduceItemsToCart(item);
  };

  let total = 0;
  cart_items.length &&
    cart_items.map((item) => {
      total = total + item.quantity * item.price;
    });

  return (
    show_cart && (
      <div className="productCart-container">
        <header className="header-container">
          <h2>My cart {`(${cart_items.length} items)`}</h2>
          <div role={"button"} className="close-btn" onClick={() => closeCart()}>
            &#10005;
          </div>
        </header>
        <div>
          {cart_items.length > 0 ? (
            cart_items.map((product) => (
              <ProductTile
                product={product}
                reduceItems={reduceItems}
                addItems={addItems}
              />
            ))
          ) : (
            <div className="cartEmpty-container">
              <h2>No Items in your cart</h2>
              <p>Your favourite items are just a click away</p>
            </div>
          )}
        </div>

        {cart_items.length > 0 ? (
          <>
            <div className="footer-img">
              <img
                src={`${process.env.PUBLIC_URL}/static/images/lowest-price.png`}
                alt="Lowest price"
              />
              <span>You won't find it cheaper anywhere</span>
            </div>
            <div className="totalAmount">
              <div>Promo code can be applied on payment page</div>
              <div role={"button"} className="button-checkout" onClick={() => closeCart()}>
                <div>Proceed to Checkout</div>
                <div>Rs. {total} &nbsp; &nbsp; &#10095;</div>
              </div>
            </div>
          </>
        ) : (
          <div className="totalAmount">
            <div role={"button"} className="button-checkout" onClick={() => closeCart()}>
              <div>Start Shopping</div>
            </div>
          </div>
        )}
      </div>
    )
  );
}

export default Cart;
