import React, { Component } from "react";
import { FaWindowClose } from "react-icons/fa";
import "./Cart.scss";
import CartItem from "./CartItem";

class Cart extends Component {
  render() {
    const items = Object.values(this.props.items);
    return (
      <aside className="mini-cart-overlay">
        <div className="mini-cart">
          <header className="cart-header">
            <h1>
              My Cart{" "}
              <span className="number-of-items">
                ({this.props.numberOfItems} item
                {this.props.numberOfItems === 1 ? "" : "s"})
              </span>
            </h1>
            <FaWindowClose onClick={this.props.closeCart} />
          </header>
          <section className="cart-body">
            {items.length ? (
              <>
                <ul className="cart-items">
                  {items.map((item) => (
                    <CartItem item={item} />
                  ))}
                </ul>
                <div className="checkout">
                  <p>Promo can be applied on payment page</p>
                  <button
                    className="checkout-button"
                    onClick={this.props.closeCart}
                  >
                    <p>Proceed to Checkout</p>
                    <span>Rs.{this.props.total} &gt;</span>
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="no-items">
                  <h1>No items in your cart</h1>
                  <p>Your favorite items are just a click away</p>
                </div>
                <button
                  className="checkout-button without-items"
                  onClick={this.props.closeCart}
                >
                  Start Shopping
                </button>
              </>
            )}
          </section>
        </div>
      </aside>
    );
  }
}

export default Cart;
