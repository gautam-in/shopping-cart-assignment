import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cart.scss";
import { handleIncrement, handledecrement } from "../../store/actions/action";

const Item =({ i }) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  
  const quantity = () => {
    for (let item of cart) {
      if (item.id === i.id) return item.qty;
    }
  }

  let qty = quantity();

  return (
    <div className="item">
      <div className="item__icon">
        <img src={i.imageURL} alt={i.name} />
      </div>
      <div className="item__quantity">
        <h3>{i.name}</h3>
        <div>
          <span
            onClick={() => dispatch(handledecrement(i))}
            className={"item__changeQty"}
          >
            -
          </span>{" "}
          <span>{qty}</span>{" "}
          <span
            onClick={() => dispatch(handleIncrement(i))}
            className={"item__changeQty"}
          >
            +
          </span>{" "}
          <span>x &nbsp; &nbsp;&nbsp; Rs.{i.price} </span>
        </div>
      </div>
      <div className="item__price"> Rs. {i.price * qty} </div>
    </div>
  );
}

export default Item;
