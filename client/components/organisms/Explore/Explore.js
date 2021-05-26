import React from "react";
import { useHistory } from "react-router";
import Button from "../../atoms/Button/Button";
import "./Explore.scss";
function Explore({ category, index }) {
  const history = useHistory();
  return (
    <div
      className="flexed_ai_center explore_section"
      style={{
        flexDirection: index % 2 === 0 ? "row" : "row-reverse",
      }}
    >
      <img
        src={category.imageUrl}
        alt={category.name}
        width="100"
        loading="lazy"
      />

      <div className="explore_caption">
        <h4>{category.name}</h4>
        <div>{category.description}</div>
        <Button
          onClick={() => {
            history.push({
              pathname: "/products",
              search: "?category=" + category.id,
            });
          }}
        >
          Explore {category.name}
        </Button>
      </div>
    </div>
  );
}

export default Explore;
