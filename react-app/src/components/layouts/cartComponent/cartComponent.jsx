import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decreaseItemCount,
  getCartItems,
  increaseItemCount,
} from "../../../store/entities/items";
import "./cartComponent.scss";

function CartComponent() {
  const navigate = useNavigate();
  const cartItems = useSelector(getCartItems);
  const dispatch = useDispatch();

  const increaseCount = (item, count) => {
    if (count < item.stock) {
      dispatch(increaseItemCount(item));
    } else {
      window.alert("quantity exceeds");
    }
  };
  const totralcartItemCount = () => {
    let itemcount = 0;
    cartItems.map((element) => {
      itemcount = itemcount + element.itemCount;
    });
    return `${itemcount} items`;
  };

  const itemCount = (item) => {
    let itemIndexinCart = cartItems.findIndex((each) => each.id === item.id);
    return (
      <div className={"addcartbtn"}>
        <button
          onClick={() => dispatch(decreaseItemCount(item))}
          className={"parts"}
        >
          -
        </button>
        <div className={"countTxt"}>{cartItems[itemIndexinCart].itemCount}</div>
        <button
          onClick={() =>
            increaseCount(item, cartItems[itemIndexinCart].itemCount)
          }
          className={"parts"}
        >
          +
        </button>
      </div>
    );
  };
  const totalCartPrice = () => {
    let totalPrice = 0;
    cartItems.map((element) => {
      totalPrice = totalPrice + element.itemCount * element.price;
    });
    return `Rs. ${totalPrice} >`;
  };

  return (
      <div className={"cartContainer"}>
        <div className={"heading"}>My Cart({totralcartItemCount()})</div>
        <div className={"itemsContainer"}>
          {cartItems.map((item) => (
            <div className={"eachItem"}>
              <div key={item.id} className={"leftSec"}>
                <div className={"bannerImage"}>
                  <img src={item.imageURL} alt={"item"} />
                </div>
              </div>
              <div className={"rightSec"}>
                <div className={"itemDescription desc"}>{item.name} </div>
                <div className={"addRemove"}>
                  <div className={"addRemoveLeftSec"}>
                    {itemCount(item)} <span className={"xbtn"}>X</span> Rs.
                    {item.price}
                  </div>
                  <div className={"totalPrice"}>
                    Rs.{item.price * item.itemCount}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cartItems && cartItems.length > 0 && (
          <div className={"bottomSec"}>
            <div>You won't find it cheaper anywhere</div>
            <button className="butn">
              <div className="proceedText">Proceed to Checkout</div>
              <div>{totalCartPrice()}</div>
            </button>
          </div>
        )}
        {cartItems && cartItems.length === 0 && (
          <div className="checkout-btn-sec shopping-btn">
            <span className="promo">
              Promo code can be applied on payment page.
            </span>
            <button className="btn-cls" onClick={() => navigate("/products")}>
              Start Shopping
            </button>
          </div>
        )}
      </div>
  );
}

export default CartComponent;
