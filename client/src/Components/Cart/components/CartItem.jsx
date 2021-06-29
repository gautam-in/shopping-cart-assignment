import React, { useState, useEffect } from "react";

import Counter from "Components/Counter/Counter";
import "./CartItem.scss";

export default (props) => {
  const { product, changeCount } = props;
  const { name, imageURL, price, stock, count, id } = product;
  const [counter, setCounter] = useState(count);

  const getCount = (count) => {
    setCounter(count);
    changeCount && changeCount(id, count);
  };
  return (
    <section className="section-cart-item">
      <div className="main-container">
        <div className="img">
          <img src={imageURL} alt={name} />
        </div>
        <div className="list-body">
          <div className="title">{name}</div>
          <div className="pricing-section">
            <div className="counter-container">
              <Counter initial={counter} max={stock} getCount={getCount} />
              <div className="price">{`X  ${price}`}</div>
            </div>
            <div className="total-price">{price * counter}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
