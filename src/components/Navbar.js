import React, { Component } from "react";
import LogoBig from "../../public/static/images/logo_2x.png";
import LogoSmall from "../../public/static/images/logo.png";
import Cart from "../../public/static/images/cart.svg";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSidebar: false,
    };
  }

  handleUserLogin = (event) => {
    console.log(event.target);
    sessionStorage.setItem("currentUser", "");
    // event.target.innerHTML = `<a href="/signin">SignIn</>`;
    // event.target.innerText = "TExt";
    // if (sessionStorage.getItem("currentUser")) {
    //   sessionStorage.setItem("currentUser", "");
    //   event.target.innerText === "SignIn";
    // } else {
    //   event.target.innerText === "Signin";
    // }
  };

  render() {
    return (
      <div className="navbarContainer">
        <div className="navBar">
          <Link to="/home" className="logo">
            <img src={LogoSmall} className="logoSmall" alt="logosmall" />
            <img src={LogoBig} className="logoBig" alt="logobig" />
          </Link>
          <div className="navBarLinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="products">Products</Link>
            </li>
          </div>
          <div className="rightSection">
            <div className="moreLinks">
              <li>
                <Link to="signin" onClick={this.handleUserLogin}>
                  {sessionStorage.getItem("currentUser") ? "Logout" : "SignIn"}
                  {/* {}SignIn */}
                </Link>
              </li>
              <li>
                <Link to="signup">Register</Link>
              </li>
            </div>
            <Link to="/cart" className="cartLogo">
              <img className="img" src={Cart} alt="Cart" />
              <p>
                {this.props.mainCartItems && this.props.mainCartItems.length}{" "}
                items
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
