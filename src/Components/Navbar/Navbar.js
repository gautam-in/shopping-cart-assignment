import React from "react";
import { connect } from "react-redux";
import "./Navbar.scss";
import { changecartstatus } from "../../redux/Cart/cartactions";
import { Link } from "react-router-dom";
function Navbar({ cartproductsData, changecartStatus }) {
  const itemnumber = cartproductsData.cartproducts.reduce(
    (sum, item) => sum + item.count,
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
            style={{ textDecoration: "none", color: "black" }}
          >
            Register
          </Link>
        </nav>
        <div className="cartcontainer" onClick={() => changecartStatus()}>
          <img src="../static/images/cart.svg" className="cart" />
          <span> {itemnumber} items</span>
        </div>
      </div>
    </header>
  );
}
const mapStateToProps = (state) => {
  return {
    cartproductsData: state.cartproducts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changecartStatus: () => dispatch(changecartstatus()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
