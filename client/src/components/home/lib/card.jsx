import React from "react";
import { useHistory } from "react-router-dom";
import "../index.scss";


function Card({ c, i }) {
  const history = useHistory();

  return (
    c.enabled && (
      <div
        style={{ flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
        className="categoryCard"
      >
        <div>
          <img src={c.imageUrl} alt="" />
        </div>
        <div className="info">
          <h2>{c.name}</h2>
          <div>{c.description}</div>
          <div
            onClick={() => history.push("products#" + c.id)}
            style={{ width: "max-content", padding: "10px 20px" }}
            className="btn"
          >
            Explore {c.key}
          </div>
        </div>
      </div>
    )
  );
}

export default Card;
