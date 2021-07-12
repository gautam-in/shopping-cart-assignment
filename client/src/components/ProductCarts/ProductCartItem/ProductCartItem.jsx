import React from "react";
import { useDispatch } from "react-redux";
import { LABEL } from "../../../constants/constant";
import { handleIncrement, handleDecrement } from "../../../store/action";
import "./ProductCartItem.scss";

function ProductCartItem(props) {
  const dispatch = useDispatch();
  const { item } = props;

  return (
    <section className="itemContainer" data-test="component-productCartItem">
      <img src={item.imageURL} width="60px" height="60px" />
      <section className="itemDescription">
        <h3>{item.name}</h3>
        <section>
          <button
            onClick={() => dispatch(handleDecrement(item.id))}
            className="buttonAction"
            data-test="button-decrement"
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            onClick={() => dispatch(handleIncrement(item.id))}
            className="buttonAction"
          >
            +
          </button>
          <span>
            X&nbsp;&nbsp; {LABEL.RS}
            {item.price}
          </span>
        </section>
      </section>
      <section className="priceItem" data-test="cartItem-price">
        {" "}
        <span>
          {" "}
          {LABEL.RS} {item.price * item.quantity}{" "}
        </span>
      </section>
    </section>
  );
}

export default ProductCartItem;
