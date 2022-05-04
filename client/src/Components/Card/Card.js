import React from "react";
import "./card.styles.css";

const Card = ({ category, left }) => {
  return (
    <div key={category.key} className="category">
      {left === 1 && (
        <div className="imageClass">
          <img src={category.imageUrl} alt="category" />
        </div>
      )}
      <div className="content">
        <div className="heading">{category.name}</div>
        <div className="description">{category.description}</div>
        <button className="exploreButton">{`Explore ${category.key}`}</button>
      </div>
      {left === 0 && (
        <div className="imageClass">
          <img src={category.imageUrl} alt="category" />
        </div>
      )}
    </div>
  );
};

export default Card;
