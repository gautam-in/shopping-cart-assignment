import React, { useContext } from "react";
import style from "./cart-body.module.css";
import { CartContext } from "../../contexts/Cart.context";
import { withRouter } from "react-router";

const CartBody = (props) => {
  const cart = useContext(CartContext);
  const totalCost = cart.cartProducts.reduce(
    (out, curElem) => out + curElem.quantity * curElem.price,
    0
  );

  console.log("cart", cart);
  const startShoppingHandler = () => {
    props.history.push("/products");
    props.setShowModal && props.setShowModal(false);
  };
  return (
    <div className={style.mainContainer}>
      <div className={style.contentContainer}>
        {cart.cartProducts.length ? (
          cart.cartProducts.map((product) => {
            const totalCostPerItem = product.quantity * product.price;
            return (
              <div key={product.id} className={style.productContainer}>
                <div className={style.productImage}>
                  <img src={product.imageURL} alt={product.name} />
                </div>
                <div className={style.productDescription}>
                  <h5>{product.name}</h5>

                  <div className={style.incDecSection}>
                    <button
                      className={`${style.button} ${style.smallScreenStyle} ${
                        props.buttonStyle ? "roundButtons" : ""
                      }`}
                      onClick={() => cart.removeCartItems(product)}
                    >
                      &#8722;
                    </button>
                    <span className={`${style.smallScreenStyle}`}>
                      {product.quantity}
                    </span>
                    <button
                      className={`${style.button} ${style.smallScreenStyle}  ${
                        props.buttonStyle ? "roundButtons" : ""
                      }`}
                      onClick={() => cart.setCartItems(product)}
                    >
                      &#43;
                    </button>
                    <span className={style.smallScreenStyle}> &#10006;</span>
                    <span className={style.smallScreenStyle}>
                      {product.price}
                    </span>
                  </div>
                </div>
                <div className={style.totalCostPerItem}>
                  {`Rs. ${totalCostPerItem}`}
                </div>
              </div>
            );
          })
        ) : (
          <div className={style.noItemInTheCart}>
            <h4>No items in your cart</h4>
            <p style={{ fontSize: "smaller" }}>
              Your favourite items are just a click away
            </p>
          </div>
        )}

        {cart.cartProducts.length ? (
          <div className={style.lowestPrice}>
            <img src={"/static/images/lowest-price.png"} alt="lowest price" />
            <span>You won't find it cheaper anywhere</span>
          </div>
        ) : null}
      </div>

      <div className={style.footer}>
        {cart.cartProducts.length ? (
          <div className={style.footerCheckout}>
            <p className={style.footerPromoParagrahph}>
              Promo code can be applied on payment page
            </p>
            <button
              onClick={() => {
                props.setShowModal && props.setShowModal(false);
              }}
              className={style.footerCheckoutButton}
            >
              <span className={style.checkoutButtonName}>
                <span>Proceed to Checkout</span>
                <span>Rs.{totalCost} &gt;</span>
              </span>
            </button>
          </div>
        ) : (
          <button
            className={style.footerCheckoutButton}
            onClick={startShoppingHandler}
          >
            {" "}
            Start Shopping
          </button>
        )}
      </div>
    </div>
  );
};

export default withRouter(CartBody);
