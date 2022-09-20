import { NAV_INFO } from "../../constants";
import contentString from "../../contentStrings/en.json";
import "./header.scss";

const Header = () => {
  const { nav } = contentString;
  const { HOME, PRODUCTS, SIGN_IN, REGISTER } = NAV_INFO;

  const list = [HOME, PRODUCTS].map((listItem) => (
    <li key={listItem.text}>
      <a href={listItem.url} className="font-bold">
        {listItem.text}
      </a>
    </li>
  ));

  const loginInfo = (
    <ul>
      {[SIGN_IN, REGISTER].map((listItem) => (
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
