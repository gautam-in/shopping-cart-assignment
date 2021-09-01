import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import CartItems from "./CartItem";

import "./index.scss";

const Cart = (props) => {

  const { handleClose } = props;
  const history = useHistory();

  const items = useSelector((state) => state.cart.itemsAdded);

  const [list, setList] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleButtonClick = () => {
    items.length > 0 ? history.push("/home") : history.push("/products");
  };

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

  const calculateTotalPrice = () => {
    let TPrice = 0;
    list.forEach((item) => {
      TPrice += item.price * item.count;
    });
    setTotalPrice(TPrice);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [list]);

  useEffect(() => {
    const objMap = {};
    const listArr = [];
    items.forEach((item) => {
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
  }, [items]);

  return (
    <section className="section-cart" onClick={removePropagation}>
      <div className="cart-header">
        <div className="title">
          My Cart <span>({`${items.length} item`})</span>
        </div>
        <div onClick={handleClose} className="close">
          x
        </div>
      </div>
      {items.length === 0 ? (
        <div className="container">
          <div className="empty-cart">
            <h2>No items in your cart</h2>
            <div>Your favorite items are just a click away</div>
          </div>
          <div className="empty-cart-btn">
            <button>Start Shopping</button>
          </div>
        </div>
      ) : (
        <>
          <div className="cart-body">
            {list.map((item) => (
              <div>
                <CartItems
                  changeCount={changeCount}
                  product={item}
                  productId={item.id}
                />
              </div>
            ))}
            <div className="advertisement">
              <img
                className="addv-image"
                src="/static/images/lowest-price.png"
                alt="Sabka Bazaar Logo"
              />{" "}
              <span className="cheaper">
                you wont find it cheaper anywhere!
              </span>
            </div>
          </div>
          <div className="cart-footer">
            <div className="Promo-code">
              Promo code can be applied on payment page
            </div>
            <div className="empty-cart-btn">
              <div
                onClick={handleButtonClick}
                className="empty-cart-btn-secondary"
              >
                <div>
                  {items.length > 0 ? "Proceed to checkout" : "Start Shopping"}
                </div>
                <div>
                  {`Rs.${totalPrice}`}
                  <span> {">"} </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;
