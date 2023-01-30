import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { routes } from "../../../config/routes.config";
import logo from "../../../static/images/logo_2x.png";
import cart from "../../../static/images/cart.svg";
import { MyGlobalContext } from "../../../context/myGLobalContext";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const { isAddToCartOpen, setIsAddToCartOpen, cartData } =
    React.useContext(MyGlobalContext);

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__left">
          <div className="header__logocontainer" onClick={() => navigate("/")}>
            <img src={logo} alt="Sabka bazar logo" className="header__logo" />
          </div>
          <nav
            role="navigation"
            className="header__nav"
            aria-label="Main navigation"
          >
            <ul className="list">
              {routes.map(({ path, name }, i) => {
                if (!["Home", "Products"].includes(name)) return "";
                return (
                  <li className="list__item" key={`nav-link-${i}`}>
                    <NavLink
                      end
                      to={path}
                      key={path}
                      className={({ isActive }: any) =>
                        `list__item--${i}` + (isActive ? "is-active" : "")
                      }
                    >
                      <span>{name}</span>
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="header__user">
          <div className="user__authentication">
            <button
              className="btn btn__user"
              onClick={() => navigate("/sign-in")}
            >
              SignIn
            </button>
            <button
              className="btn btn__user"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </div>
          <div
            className="user__cart"
            onClick={() => setIsAddToCartOpen(!isAddToCartOpen)}
          >
            <img src={cart} alt="User cart icon" className="user__cart__icon" />
            <span className="user__cart__text">{cartData?.length} items</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
