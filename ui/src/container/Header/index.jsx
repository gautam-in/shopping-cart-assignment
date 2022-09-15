import React from "react";

import contentString from "../../contentStrings/en.json";
import "./header.scss";

const navInfo = {
  home: {
    text: "Home",
    url: "/",
  },
  products: {
    text: "Products",
    url: "/products",
  },
  signIn: {
    text: "SignIn",
    url: "/sign-in",
  },
  register: {
    text: "Register",
    url: "/register",
  },
};

const Header = () => {
  const { nav } = contentString;
  const { home, products, signIn, register } = navInfo;

  const list = [home, products].map((listItem) => (
    <li key={listItem.text}>
      <a href={listItem.url} className="font-bold">
        {listItem.text}
      </a>
    </li>
  ));

  const loginInfo = (
    <ul>
      {[signIn, register].map((listItem) => (
        <li key={listItem.text}>
          <a href={listItem.url} className="font-bold">
            {listItem.text}
          </a>
        </li>
      ))}
    </ul>
  );

  const cart = (
    <div className="cart">
      <img
        src="images/cart.svg"
        alt={nav.cartAltText}
        width={35}
        height={35}
        className="cart-icon"
      />
      <span className="font-bold">0 items</span>
    </div>
  );

  return (
    <header>
      <nav>
        <div className="navbar-left">
          <img src="images/logo.png" alt={nav.logoAltText} />
          <ul>{list}</ul>
        </div>
        <div className="navbar-right">
          {loginInfo}
          {cart}
        </div>
      </nav>
    </header>
  );
};

export default Header;
