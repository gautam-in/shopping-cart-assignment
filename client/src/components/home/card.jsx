import React from "react";
import "./index.scss";
import { useHistory } from "react-router-dom";

const Card = ({ card, i }) => {

  const history = useHistory();

  return (
    card.enabled && (
      <div
        style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
        className="categoryCard"
      >
        <div>
          <img src={card.imageUrl} alt={card.name} />
        </div>
        <div className="info">
          <h2>{card.name}</h2>
          <div>{card.description}</div>
          <div
            onClick={() => history.push("products#" + card.id)}
            style={{ width: "max-content", padding: "10px 20px" }}
            className="btn"
          >
            Explore {card.key}
          </div>
        </div>
      </div>
    )
  );
}

export default Card;
