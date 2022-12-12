import type { FunctionComponent } from "react";
import { Navigation } from "../components";
import { useNavigate } from "react-router-dom";
import logo from "../static/images/logo_2x.png" ;
import cart from "../static/images/cart.svg";


const Header: FunctionComponent = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
    <img
      src={logo}
      alt="Sabka bazar logo"
      className="header__logo"
    />
    <Navigation />
    <div className="header__user">
      <div className="user__authentication">
        <button className="btn btn__user" onClick={() => navigate("/sign-in")}>SignIn</button>
        <button className="btn btn__user" onClick={() => navigate("/register")}>Register</button>
      </div>
      <div className="user__cart">
        <img
          src={cart}
          alt="User cart icon"
          className="user__cart__icon"
        />
        <span className="user__cart__text">0 items</span>
      </div>
    </div>
  </header>
  );
}

export default Header;