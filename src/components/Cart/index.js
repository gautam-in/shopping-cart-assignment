import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./Cart.module.css";

import { addToCart } from "../../actions/addToCart";
import { removeFromCart } from "../../actions/removeFromCart";

const Cart = (props) => {
  const cartList = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const totalPrice = cartList.reduce((total, cartItem) => {
    return total + cartItem.count * cartItem.price;
  }, 0);

  const addItemHandler = (id) => {
    dispatch(addToCart(id));
  };

  const removeItemHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className={classes.modal}>
      <header className={classes["cart-header"]}>
        <p>My Cart {props.noOfItems ? `{${props.noOfItems} items}` : ""}</p>
        <button onClick={props.onClick}>X</button>
      </header>
      {props.noOfItems ? (
        <div className={classes["items-container"]}>
          {cartList.map((cartItem) => {
            return (
              <div key={cartItem.id} className={classes["cart-item"]}>
                <div className={classes["img-container"]}>
                  <img src={cartItem.imageURL} alt={cartItem.name} />
                </div>
                <div className={classes["item-info"]}>
                  <h3>{cartItem.name}</h3>
                  <p>
                    <span onClick={() => removeItemHandler(cartItem.id)}>
                      -{" "}
                    </span>
                    {` ${cartItem.count} `}
                    <span onClick={() => addItemHandler(cartItem.id)}>
                      {" "}
                      +{" "}
                    </span>{" "}
                    X Rs.
                    {cartItem.price}
                  </p>
                </div>
                <div className={classes["total-price-container"]}>
                  Rs.{cartItem.price * cartItem.count}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      {props.noOfItems ? (
        <div className={classes["lowest-price-slogan"]}>
          <img src="/static/images/lowest-price.png" alt="lowest price logo" />
          <p>You won't find it cheaper anywhere</p>
        </div>
      ) : (
        <div className={classes["no-items-container"]}>
          <span>No items in your cart</span>Your favourite items are just a
          click away
        </div>
      )}

      <div className={classes["checkout-container"]}>
        {props.noOfItems ? (
          <>
            <p>Promo code can be applied on payment page</p>
            <button>
              <span>Proceed to checkout </span>
              <span>Rs. {totalPrice} &gt;</span>
            </button>
          </>
        ) : (
          <Link to="/products">
            <button style={{ justifyContent: "center" }}>Start Shopping</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Cart;
