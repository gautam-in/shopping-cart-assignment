import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
// import Counter from "Components/Counter/Counter";
import "./cartItem.scss";

export default function CartItems (props)  {
  console.log(props,"props")
  const {productId, product, changeCount,min = 0 } = props;
  const { name, imageURL, price, stock, count, id } = product;
  const [counter, setCounter] = useState(count);
  const _product = useSelector(
    (state) =>
      state.products &&
      state.products.data &&
      state.products.data.find((i) => i.id === productId)
  );
  const getCount = (count) => {
    setCounter(count);
    changeCount(product.id, count);
  };
//   const { max, min = 0, getCount, initial } = props;
//   const [counter, setCounter] = useState(counter);
  const handleAdd = () => {
    const newCount = counter + 1;
    if (newCount > stock) return;
    setCounter(newCount);
    getCount(newCount);
  };
  const handleSub = () => {
    const newCount = counter - 1;
    if (newCount < min) return;
    setCounter(newCount);
    getCount(newCount);
  };
  return (
    <div className="section-cart-item">
      <div className="main-container">
        <div className="img">
          <img src={_product.imageURL} alt={_product.name} />
        </div>
        <div className="list-body">
          <div className="title">{_product.name}</div>
          <div className="pricing-section">
            <div className="counter-container">
              {/* <Counter initial={counter} max={stock} getCount={getCount} /> */}
              {/* <div className="counter-container"> */}
      <div onClick={handleSub} className="btn-round ">
        -
      </div>
      <div className="count">{counter}</div>
      <div onClick={handleAdd} className="btn-round ">
        +
      </div>
    {/* </div> */}
    <div className="close-x">X</div>
              <div className="price">&#x20a8;.{_product.price}</div>
            </div>
            <div className="total-price">&#x20a8;.{_product.price * counter}</div>
          </div>
        </div>
      </div>
    </div>
  );
};