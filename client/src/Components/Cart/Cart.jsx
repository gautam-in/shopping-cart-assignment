/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect, useState } from "react";
import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import CartItem from "./components/CartItem";
import LowestPrice from "../LowestPrice/LowestPrice";
import "./Cart.scss";

export default (props) => {
  const { cartItems = [], handleClose, updateCart } = props;
  const [list, setList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const removePropagation = (e) => {
    e.stopPropagation();
  };

  const changeCount = (id, count) => {
    const newList = list.map((item) => {
      if (item.id === id) {
        item.count = count;
      }
      return item;
    });
    setList(newList);
  };

  const handleButtonClick = () => {
    updateCart([]);
  };

  const calculateTotalPrice = () => {
    let TPrice = 0;
    list.forEach((item) => {
      console.log("calculateTotal", item.price, item.count);
      TPrice += item.price * item.count;
    });
    console.log("calculateTotal2", TPrice);
    setTotalPrice(TPrice);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [list]);

  useEffect(() => {
    const objMap = {};
    const listArr = [];
    cartItems.forEach((item) => {
      if (!objMap[item.id]) {
        objMap[item.id] = 0;
        listArr.push(item);
      }
      objMap[item.id]++;
    });
    listArr.forEach((item) => {
      item.count = objMap[item.id];
    });
    setList(listArr);
  }, [cartItems]);

  return (
    <section className="section-cart" onClick={removePropagation}>
      <div className="header">
        <div className="title">
          My Cart <span>({`${cartItems.length} item`})</span>
        </div>
        <div onClick={handleClose} className="close">
          x
        </div>
      </div>
      {cartItems.length === 0 ? (
        <div className="container">
          <div className="empty-cart">
            <h2>No items in your cart</h2>
            <div>Your favorite items are just a click away</div>
          </div>
          <div className="btn">
            <ButtonPrimary title="Start Shopping" />
          </div>
        </div>
      ) : (
        <>
          <div className="cart-body">
            {list.map((item) => (
              <div>
                <CartItem changeCount={changeCount} product={item} />
              </div>
            ))}
            <LowestPrice />
          </div>
          <div className="cart-footer">
            <div className="flex-center">
              Promo code can be applied on payment page
            </div>
            <div className="btn">
              <ButtonPrimary click={handleButtonClick}>
                <div className="btn-secondary">
                  <div>Proceed to Checkout</div>
                  <div>
                    {`Rs${totalPrice}`}
                    <span> {">"} </span>
                  </div>
                </div>
              </ButtonPrimary>
            </div>
          </div>
        </>
      )}
    </section>
  );
};
