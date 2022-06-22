import React from "react";
import "../Banner/Banner.scss";
import Button from "../Button/Button";

const Banner = ({ category }) => {
  return (
    <div className="category-container" key={category.key}>
      <div className="category-image-box">
        <img
          className="category-image"
          src={category.imageUrl}
          alt="Category"
        />
      </div>
      <div className="category-content-box">
        <div className="category-content-heading">{category.name}</div>
        <div className="category-contnent-description">
          {category.description}
        </div>
        <div className="category-contnent-button">
          <Button type="xl" onClick={null}>
            Explore {category.key}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
