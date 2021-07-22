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
    if (sessionStorage.getItem("currentUser")) {
      sessionStorage.setItem("currentUser", "");
    }
  };

  render() {
    return (
      <nav className="navbarContainer">
        <header className="navBar">
          <Link to="/home" className="logo">
            <img src={LogoSmall} className="logoSmall" alt="logosmall" />
            <img src={LogoBig} className="logoBig" alt="logobig" />
          </Link>
          <article className="navBarLinks">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="products">Products</Link>
            </li>
          </article>
          <article className="rightSection">
            <aside className="moreLinks">
              <li>
                <Link to="signin" onClick={this.handleUserLogin}>
                  {sessionStorage.getItem("currentUser") ? "Logout" : "SignIn"}
                  {/* {}SignIn */}
                </Link>
              </li>
              <li>
                <Link to="signup">Register</Link>
              </li>
            </aside>
            <Link to="/cart" className="cartLogo">
              <img className="img" src={Cart} alt="Cart" />
              <p>
                {sessionStorage.getItem("currentUser")
                  ? this.props.mainCartItems && this.props.mainCartItems.length
                  : 0}{" "}
                items
              </p>
            </Link>
          </article>
        </header>
      </nav>
    );
  }
}

export default Navbar;
