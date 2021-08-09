import React, { useState } from "react";

import "./Counter.scss";

export default (props) => {
  const { max, min = 0, getCount, initial } = props;
  const [counter, setCounter] = useState(initial);
  const handleAdd = () => {
    const newCount = counter + 1;
    if (newCount > max) return;
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
    <div className="counter-container">
      <div onClick={handleSub} className="btn-round flex-center">
        -
      </div>
      <div className="count">{counter}</div>
      <div onClick={handleAdd} className="btn-round flex-center">
        +
      </div>
    </div>
  );
};
