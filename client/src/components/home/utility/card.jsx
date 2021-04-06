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
        data-test= "card-component"
      >
        <div>
          <img data-test = "card-imgUrl"src={c.imageUrl} alt="" />
        </div>
        <div className="info">
          <h2>{c.name}</h2>
          <div>{c.description}</div>
          <button
            onClick={() => history.push("products#" + c.id)}
            style={{ width: "max-content", padding: "10px 20px", margin:"20px"}}
            className="btn"
          >
            Explore {c.key}
          </button>
        </div>
      </div>
    )
  );
}

export default Card;
