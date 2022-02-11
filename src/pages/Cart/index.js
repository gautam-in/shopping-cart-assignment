import React, { useContext } from "react";
import Button from "../../components/Button";
import CartItem from "../../components/CartItem";
import CartContext from "../../store/cart-context";
import "./style.scss";

function Cart(props) {
  const ctx = useContext(CartContext);
  const hasItems = ctx.totalItems > 0;
  let showItems;

  const addHandler = (product) => {
    if (
      ctx.items[product.id] &&
      ctx.items[product.id].amount < ctx.items[product.id].stock
    ) {
      ctx.addItem({ ...product, amount: 1 });
    } else {
      console.log("Maximum limit is reached");
    }
  };

  const removeHandler = (product) => {
    ctx.removeItem({ ...product });
  };

  if (hasItems) {
    const prodList = Object.values(ctx.items);
    showItems = prodList.map((prod) => (
      <CartItem
        key={prod.id}
        product={prod}
        onAdd={addHandler}
        onRemove={removeHandler}
      ></CartItem>
    ));
  }

  return (
    <>
      <div className="modal hidden">
        <div className="cart__heading">
          <span className="cart--cnt">My Cart</span>
          <button className="btn--close" onClick={props.onClose}>
            &times;
          </button>
        </div>
        {hasItems ? (
          <>
            <div className="newContainer cart--nonempty">
              <div className="cartItemContainer  cItem__Container">
                {showItems}
                <footer className="cart__footer">
                  <img
                    src="/static/images/lowest-price.png"
                    className="cart__footerImg"
                  />
                  <span>You won't find it cheaper anywhere</span>
                </footer>
              </div>
            </div>
            <div className="stickAtBottom cart__bottom">
              <span className="promo">
                Promo code can be applied on payment page
              </span>
              <Button className="btn nonempty--btn" onClick={props.onClose}>
                <span>Proceed to Checkout</span>
                <span> Rs.{ctx.totalAmount}</span>
              </Button>
            </div>
          </>
        ) : (
          <div className="cartContent cart--empty">
            <h2>No items in your cart</h2>
            <p>Your favorite items are just a click away</p>
            <Button className="btn empty--btn" onClick={props.onClose}>
              Start Shopping
            </Button>
          </div>
        )}
      </div>
      <div className="cart--overlay" onClick={props.onClose}></div>
    </>
  );
}

export default Cart;
