import "./navigation.styles.scss";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <img
            className="nav-logo-image"
            src={process.env.PUBLIC_URL + "/static/images/logo.png"}
            alt="sabka bazaar"
          />
        </Link>
        <div className="nav-link-items">
          <div className="nav-link-element">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
          </div>
          <div>
            <div className="nav-link-element">
              <Link to="/login">SignIn</Link>
              <Link to="/register">Register</Link>
            </div>
            <div className="cart">
              <img
                className="cart-image"
                src={process.env.PUBLIC_URL + "/static/images/cart.svg"}
                alt="cart"
              />
              <div className="items-count">0 items</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Navigation;
