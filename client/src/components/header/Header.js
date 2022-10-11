import React from "react";
import { Image } from "react-bootstrap";
import styles from "./Header.module.scss";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loadCart } from "../redux/action";
import Cart from "../cart/Cart";
// import { useSelector } from "react-redux";
export const Header = () => {
  // const { cartDisplay } = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  const { products,cartDisplay } = useSelector((state) => state.cartData);
  console.log(cartDisplay,"cartDisplay")
  const navigate = useNavigate();
  const displayCartItems = () => {
    dispatch(loadCart(true));
  };
  return (
    <div className={styles.headerBorder}>
      <div className={styles.header}>
        <div className={styles.bannerSide}>
          <Image
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/Home")}
            src={"./static/images/logo_2x.webp"}
            tabIndex="0"
            onKeyPress={() => navigate("/Home")}
            aria-label="Saab Ka Bazaar"
          ></Image>
          <div className={styles.headerLink}>
            <Link
              role="button"
              tabIndex="0"
              aria-label="Home"
              className={styles.homeLink}
              to="/Home"
              onKeyPress={() => navigate("/Home")}
            >
              <strong>Home</strong>
            </Link>
            <Link
              role="button"
              tabIndex="0"
              aria-label="Products"
              className={styles.productLink}
              to="/Products"
              onKeyPress={() => navigate("/Products")}
            >
              <strong>Products</strong>
            </Link>
          </div>
        </div>
        <div className={styles.cartSide}>
          <div className={styles.authLink}>
            <Link
              role="button"
              tabIndex="0"
              aria-label="signin"
              className={styles.authLogin}
              to="/SignIn"
              onKeyPress={() => navigate("/SignIn")}
            >
              SignIn
            </Link>
            <Link
              role="button"
              tabIndex="0"
              aria-label="register"
              className={styles.productLink}
              to="/"
              onKeyPress={() => navigate("/")}
            >
              Register
            </Link>
          </div>
          <div  className={styles.cartImage}>
            <div tabIndex="0"   aria-label="Add to Cart" onClick={displayCartItems} onKeyPress={displayCartItems} className={styles.innerCartImage}>
              <Image
                src={"./static/images/cart.svg"}
                width="28px"
                height="40px"
                className={styles.addCartImage}
                alt="cart"
           
              />
              <span className={styles.cartItems}>
                &nbsp;&nbsp;{products.length} items
              </span>
            </div>
          </div>
        </div>
      </div>
      {cartDisplay && <Cart />}
    </div>
  );
};
