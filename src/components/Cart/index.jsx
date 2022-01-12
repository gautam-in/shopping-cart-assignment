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
            My Cart ({this.props.numberOfItems} item
            {this.props.numberOfItems === 1 ? "" : "s"})
            <FaWindowClose onClick={this.props.closeCart} />
          </header>
          <section className="cart-body">
            <ul>
              {items.map((item) => (
                <CartItem item={item} />
              ))}
            </ul>
          </section>
        </div>
      </aside>
    );
  }
}

export default Cart;
