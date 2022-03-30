import React from "react";
import Button from "../button/button";
import "./category-item.styles.css";

const CategoryItem = ({ name, imageUrl, description, alignment }) => {
  return (
    <figure className="category-box">
      {alignment === "left" && (
        <div className="category-img-box">
          <img className="category-img" src={imageUrl} alt={name} />
        </div>
      )}
      <div className="category-details">
        <h2 className="category-name">{name}</h2>
        <p className="category-description">{description}</p>
        <Button>
          <span className="category-explore">{`Explore ${name}`}</span>
        </Button>
      </div>
      {alignment === "right" && (
        <div className="category-img-box">
          <img className="category-img" src={imageUrl} alt={name} />
        </div>
      )}
    </figure>
  );
};

export default CategoryItem;
