import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../cart.scss";
import { handleIncrement, handledecrement } from "../../../Redux/action";

function Item({ i }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let qty = quantity();
  function quantity() {
    for (let item of cart) {
      if (item.id === i.id) return item.qty;
    }
  }

  return (
    <div className="item">
      <div className="icon">
        {" "}
        <img src={i.imageURL} alt="" />{" "}
      </div>
      <div className="quantity">
        <h3>{i.name}</h3>
        <div>
          <button
            onClick={() => dispatch(handledecrement(i))}
            className={"changeQnt"}
          >
            -
          </button>{" "}
          <span>{qty}</span>{" "}
          <button
            onClick={() => dispatch(handleIncrement(i))}
            className={"changeQnt"}
          >
            +
          </button>{" "}
          <span>x &nbsp; &nbsp;&nbsp; Rs.{i.price} </span>
        </div>
      </div>
      <div className="priceItem"> Rs. {i.price * qty} </div>
    </div>
  );
}

export default Item;
