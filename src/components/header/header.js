import React, { useEffect, useState } from "react";
import "./header.css";
import logo from "../../assests/static/images/logo.png";
import logo2X from "../../assests/static/images/logo_2x.png";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const navigate = useNavigate();
  const [cartCount, setCartCount] = useState(0);

  const isLoggedIn = sessionStorage.getItem("userLoggedIn");

  const getCartData = async () => {
    const res = await fetch("http://localhost:3000/cart");
    const jsonData = await res.json();

    let sum = 0;
    jsonData.forEach((x) => {
      sum += x.quantity;
    });

    setCartCount(sum);
    //console.log("cart Data", cartCount);
  };

  const showCart = () => {
    if (isLoggedIn === "true") {
      navigate("/cart");
    }
  };

  const signout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  useEffect(() => {
    getCartData();
    //console.log("products cart val", props?.cartHeaderVal);
  }, []);

  useEffect(() => {
    console.log("products cart val22", props?.cartHeaderVal);
    //if (props?.cartHeaderVal) {
    setCartCount(props?.cartHeaderVal);
    // }
  }, [props.cartHeaderVal]);

  return (
    <>
      <header class="app-header">
        <div class="container">
          <picture>
            <source srcSet={logo2X} media="(min-width: 720px)" />
            <img src={logo} alt="Sabka Bazaar logo" />
          </picture>
          <nav>
            {isLoggedIn === "true" && (
              <ul>
                <li>
                  <a href="/home">Home</a>
                </li>
                <li>
                  <a href="/products/0">Products</a>
                </li>
              </ul>
            )}
          </nav>

          <section>
            <nav>
              <ul>
                {isLoggedIn !== "true" ? (
                  <>
                    <li>
                      <a href="/">SignIn</a>
                    </li>
                    <li>
                      <a href="/register">Register</a>
                    </li>
                  </>
                ) : (
                  <li onClick={() => signout()}>
                    <a>Sign Out</a>
                  </li>
                )}
              </ul>
            </nav>
            <button class="cart-view" onClick={showCart}>
              <div>
                <span class="sr-only">View Shopping Cart</span>
                <svg
                  version="1.1"
                  id="Layer_1"
                  focusable="false"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                </svg>
              </div>
              <span>{isLoggedIn ? cartCount : 0} items</span>
            </button>
          </section>
        </div>
      </header>
    </>
  );
};

export default Header;
