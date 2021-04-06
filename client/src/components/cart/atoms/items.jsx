import React from "react";
import { useSelector} from "react-redux";
import "../cart.scss";
import { handleIncrement, handledecrement } from "../../../Redux/action";
import ActionButton from "./actionButton";
import ItemImage from "./itemImage"

function Item({ i }) {
  const cart = useSelector((state) => state.cart);
  let qty = quantity();
  function quantity() {
    for (let item of cart) {
      if (item.id === i.id) return item.qty;
    }
  }

  return (
    <div className="item">
      <ItemImage imageURL ={i.imageURL}/>
      <div className="quantity">
        <h3>{i.name}</h3>
        <div>
          <ActionButton action ={handledecrement(i)} sign ="-"/>
          <span>{qty}</span>{" "}
          <ActionButton action ={handleIncrement(i)} sign ="+"/>
          <span>x &nbsp; &nbsp;&nbsp; Rs.{i.price} </span>
        </div>
      </div>
      <div className="priceItem"> Rs. {i.price * qty} </div>
    </div>
  );
}

export default Item;
