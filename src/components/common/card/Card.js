import React from "react";
import "./Card.scss";

const Card = (props) => {
  return (
    <div
      className={
        props.order % 2 === 0 ? "cardContainer alter" : "cardContainer"
      }
    >
      <div className="leftCardContainer">
        <img src={props.src} alt={props.title} />
      </div>
      <div className="rightCardContainer">
        <div className="title">{props.title}</div>
        <p>{props.description}</p>
        <button onClick={props.handleClick}>Explore {props.buttonText}</button>
      </div>
    </div>
  );
};

export default Card;
