import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Cart from '../Cart';
import './Navbar.scss';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openCart: false,
    };
  }
  toggleCart = () => {
    this.setState({
      openCart: !this.state.openCart,
    });
  };
  render() {
    const { cart } = this.props;

    return (
      <header>
        <div className="navigation">
          <div>
            <Link to="/">
              <img
                className="logo-img"
                src="static/images/logo.png"
                alt="logo"
              />{' '}
            </Link>
          </div>

          <nav>
            <div className="page-nav-main">
              <Link className="links" to="/">
                Home
              </Link>
              <Link className="links" to="/products">
                {' '}
                Products
              </Link>
            </div>
          </nav>
          <div className="cart-login-container">
            <nav>
              <div className="page-nav-sec">
                <Link className="links" to="/login">
                  SignIn
                </Link>
                <Link className="links" to="/register">
                  {' '}
                  Register
                </Link>
              </div>
            </nav>
            <button className="btn-cart" onClick={this.toggleCart}>
              <img
                src="static/images/cart.svg"
                alt="cart icon"
                className="icon"
                id="outside"
              />
              <span className="text" id="cart-items">
                {this.props.totalItem} Items
              </span>
            </button>
            <div
              id="desktop-cart"
              className="cart-main-cont"
              style={{ display: this.state.openCart ? 'block' : 'none' }}
            >
              <div>
                <Cart toggleCart={this.toggleCart} />
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart.cart,
    totalItem: state.cart.totalItems,
  };
}
export default connect(mapStateToProps)(Navbar);
