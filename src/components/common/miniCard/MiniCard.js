import React from "react";
import { useSelector } from "react-redux";
import "./MiniCard.scss";

const MiniCard = (props) => {
  const itemsCount = useSelector((state) => state.itemsCount);
  return (
    itemsCount[0][props.id] > 0 && (
      <div className="miniCardContainer">
        <div className="imageContainer">
          <img src={props.src} alt={props.name} />
        </div>
        <div className="detailsContainer">
          <div className="name">{props.name}</div>
          <div className="priceContainer">
            <div>
              <button onClick={props.decrementHandler}>-</button>
              <span className="count">{itemsCount[0][props.id]}</span>
              <button onClick={props.incrementHandler}>+</button>
              <span className="count"> X {props.price}</span>
            </div>
            <div>Rs.{itemsCount[0][props.id] * props.price}</div>
          </div>
        </div>
      </div>
    )
  );
};

export default MiniCard;
