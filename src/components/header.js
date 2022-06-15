import React, { Component, Fragment } from "react";
import "../css/style.css";
import logo2x from "../assets/logo_2x.png";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { productCount: 0 };
  }

  componentDidMount() {
    const productCounTemp = localStorage.getItem("productCount");
    this.setState({
      productCount: productCounTemp != null ? productCounTemp : 0,
    });
  }
  componentDidUpdate() {
    const productCounTemp = localStorage.getItem("productCount");
    if (this.state.productCount != productCounTemp) {
      this.setState({
        productCount: productCounTemp != null ? productCounTemp : 0,
      });
    }
  }
  render() {
    return (
      <Fragment>
        <header className="app-header">
          <div className="container">
            <Link to="/">
              <picture>
                <source srcSet={logo2x} media="(min-width: 720px)" />
                <img src={logo} alt="logo" />
              </picture>
            </Link>

            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                  {/* <a href="#">Home</a> */}
                </li>
                <li>
                  <Link to="/products">Products</Link>
                  {/* <a href="#">Products</a> */}
                </li>
              </ul>
            </nav>
            <section>
              <nav>
                <ul>
                  <li>
                    {/* <a href="#">SignIn</a> */}
                    <Link to="/login">SignIn</Link>
                  </li>
                  <li>
                    {/* <a href="#">Register</a> */}
                    <Link to="/register">Register</Link>
                  </li>
                </ul>
              </nav>
              <button
                className="cart-view pointer"
                onClick={this.props.toggleCart}
              >
                <div>
                  <span className="sr-only">View Shopping Cart</span>
                  <svg
                    version="1.1"
                    id="Layer_1"
                    focusable="false"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 24 24"
                    xmlSpace="preserve"
                    fill="maroon"
                  >
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1.003 1.003 0 0 0 20 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                  </svg>
                </div>
                <span>
                  {this.props.productCount
                    ? `${this.props.productCount} item`
                    : `${this.state.productCount} item`}
                </span>
              </button>
            </section>
          </div>
        </header>
        {/* <Outlet /> */}
      </Fragment>
    );
  }
}

export default Header;
