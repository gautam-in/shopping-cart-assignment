import type { FunctionComponent } from "react";
import { Navigation } from "../components";
import { useNavigate } from "react-router-dom";
import logo from "../containers/static/images/logo_2x.png" ;
import cart from "../containers/static/images/cart.svg";
import { type RootState } from "../store";
import { useSelector } from "react-redux";


const Header: FunctionComponent = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state: RootState) => state.Products.entities.cartItems || []);
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
      <div className="user__cart" onClick={() => navigate("/cart")}>
        <img
          src={cart}
          alt="User cart icon"
          className="user__cart__icon"
        />
        <span className="user__cart__text">{cartItems?.length} items</span>
      </div>
    </div>
  </header>
  );
}

export default Header;