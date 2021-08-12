import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useSelector, useDispatch } from "react-redux";
import { changecartstatus } from "../../redux/Cart/cartactions";
export default function Header() {
  const cartproductsData = useSelector((state) => state.cartproducts);
  const dispatch = useDispatch(changecartstatus());
  const changeCartStatus = () => dispatch(changecartstatus())
  const items = cartproductsData.cartproducts.reduce(
    (total, item) => total + item.count,
    0
  );
  return (
    <header className="Header">
      <div>
        <img src="../static/images/logo.png" alt="logo" className="logo" />
        <nav className="navlinks">
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
          <Link
            to="/Product"
            style={{ textDecoration: "none", color: "black" }}
          >
            Product
          </Link>
        </nav>
      </div>
      <div>
        <nav>
          <Link to="/Login" style={{ textDecoration: "none", color: "black" }}>
            Sign In
          </Link>
          <Link
            to="/Register"
            style={{
              textDecoration: "none",
              color: "black",
              marginLeft: "1rem",
            }}
          >
            Register
          </Link>
        </nav>
        <div className="cartcontainer" onClick={() => changeCartStatus()}>
          <img src="../static/images/cart.svg" className="cart" />
          <span> {items} items</span>
        </div>
      </div>
    </header>
  );
}
