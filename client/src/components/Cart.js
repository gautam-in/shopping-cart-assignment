import React, { useContext } from "react";
import CartContext from "../store/cart-context";
import CartItems from "./CartItems";
import CheaperRates from "./CheaperRates";
import EmptyCart from "./EmptyCart";
import CartCheckoutButton from "./CartCheckoutButton";
import EmptyFooter from "./EmptyFooter";
import "../styles/cart.scss";
const Cart = ({ closeCart }) => {
  
  const cartContext = useContext(CartContext);

  const numberOfItems = cartContext.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  const totalAmount = `Rs.${cartContext.totalAmount.toFixed(2)}`;
  const hasItems = numberOfItems > 0;

  const cartItemRemoveHandler = (e, id) => {
    e.stopPropagation();
    cartContext.removeItem(id);
  };
  const cartAddRemoveHandler = (e, item) => {
    e.stopPropagation();
    cartContext.addItems({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className="cart-items">
      {cartContext.items.map((item) => (
        <CartItems
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          image={item.image}
          onRemove={(e) => cartItemRemoveHandler(e, item.id)}
          onAdd={(e) => cartAddRemoveHandler(e, item)}
        />
      ))}
    </ul>
  );
  let content = (
    <div className="cart">
      <div className="cart__container" onClick={closeCart}></div>
      <div className="cart__modal">
        <div className="cart__head">
          <div>
            <h2>
              My Cart(<small>{numberOfItems} item</small>)
            </h2>
          </div>
          <div className="cart__close_button">
            <button onClick={closeCart}>X</button>
          </div>
        </div>
        <div className="cart__body">
          {hasItems && cartItems}
          {hasItems && <CheaperRates />}
          {!hasItems && <EmptyCart />}
        </div>
        {hasItems && <CartCheckoutButton totalAmount={totalAmount} />}
        {!hasItems && <EmptyFooter />}
      </div>
    </div>
  );
  //render the modal JSX in the portal div.
  return content;
};

export default Cart;
