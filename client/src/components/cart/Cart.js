import React from "react";
import styles from "./Cart.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { Button, Image } from "react-bootstrap";
import { loadCart, loadProduct, removeProduct } from "../redux/action";

const Cart = () => {
  document.title = "Cart";
  const { products } = useSelector((state) => state.cartData);
  const countDict = products.reduce((acc, curr) => {
    const { name } = curr;
    if (acc[name]) ++acc[name];
    else acc[name] = 1;
    return acc;
  }, {});

  const result = products.map((obj) => {
    obj["count"] = countDict[obj.name];
    return obj;
  });
  let cartItems = Array.from(new Set(result));

  const dispatch = useDispatch();
  const openForm = () => {
    dispatch(loadCart(false));
  };
  const addProduct = (e, item) => {
    e.preventDefault();

    dispatch(loadProduct(item));
  };
  const removeItem = (e, item) => {
    e.preventDefault();
    var idx = products.findIndex((p) => p.name === item.name);
    products.splice(idx, 1);

    dispatch(removeProduct(products));
  };

  return (
    <>
      <div className={styles["backdrop"]} />
      <div className={styles.cartbg}>
        <div className={styles.chat_popup} id="myForm">
          <div className={styles.form_container}>
            <div className={styles.cartHeader}>
              <h5 tabIndex="0" className={styles.myCardText}>
                My Cart&nbsp;
                <span className={styles.myCardItem}>
                  ({products.length} items)
                </span>
              </h5>
              <div className={styles.closeIcon} onClick={openForm}>
                &times;
              </div>
            </div>
            <div
              className={styles.cartbg}
              style={
                cartItems.length > 0
                  ? { height: "349px", overflowY: "scroll" }
                  : { height: "349px" }
              }
            >
              {cartItems.length === 0 && (
                <>
                  <div className={styles.noCart}>
                    <div className={styles.noCartBtn}>
                      <h5>
                        <strong>No items in your cart</strong>
                      </h5>
                      <span style={{ fontSize: "15px" }}>
                        Your favourite item are just a click away
                      </span>
                    </div>

                    <Button
                      className={
                        styles.checkoutBtn + " " + styles.checkoutBtnNoItem
                      }
                    >
                      Start Shopping
                    </Button>
                  </div>
                </>
              )}
              <div>
                {cartItems.length > 0 &&
                  cartItems.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className={styles.cartRecord}>
                          <img
                            src={item.imageURL}
                            className={styles.cartImage}
                            alt="cart"
                          />
                          <div className={styles.decCart}>
                            <p
                              style={{
                                fontWeight: "600",
                                display: "flex",
                                paddingTop: "5px",
                              }}
                            >
                              {item.name}
                            </p>
                            <div className={styles.cartCalc}>
                              <div className={styles.cartCalcBtn}>
                                <button
                                  className={styles.cartdelBtn}
                                  onClick={(e) => removeItem(e, item)}
                                  onKeyPress={(e) => removeItem(e, item)}
                                >
                                  <span style={{ marginBottom: "4px" }}>
                                    {" "}
                                    -
                                  </span>
                                </button>

                                <span className={styles.cartCount}>
                                  {item.count}
                                </span>

                                <button
                                  className={styles.cartdelBtnplus}
                                  onClick={(e) => addProduct(e, item)}
                                  onKeyPress={(e) => addProduct(e, item)}
                                >
                                  <span style={{ marginBottom: "4px" }}>+</span>
                                </button>
                                <span style={{ marginLeft: "20px" }}>
                                  x{" "}
                                  <span style={{ marginLeft: "7px" }}>
                                    Rs. {item.price}
                                  </span>
                                </span>
                              </div>
                              <div className={styles.cartTotalValue}>
                                Rs.{item.price * item.count}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
              </div>
              {cartItems.length > 0 && (
                <div className={styles.cartlog}>
                  <div style={{ backgroundColor: "white" }}>
                    <Image src={"./static/images/lowest-price.png"}></Image>
                  </div>
                  <span
                    style={{
                      backgroundColor: "white",
                      fontSize: "14px",
                      marginLeft: "2px",
                    }}
                  >
                    You wont't find it cheaper anywhere
                  </span>
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className={styles.cartBottom}>
                <div style={{ padding: "9px" }}>
                  Promo code can be applied on payment page
                </div>
                <Button className={styles.checkoutBtn}>
                  <div className={styles.cartTotalBtn}>
                    <span>Proceed to Checkout</span>
                    <span>
                      Rs.
                      {result.reduce((acc, curr) => {
                        return (acc = acc + curr.price);
                      }, 0)}
                    </span>
                  </div>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
