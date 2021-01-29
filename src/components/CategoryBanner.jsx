import React from "react";
import "./CategoryBanner.css";
function CategoryBanner(props) {
  const { category } = props;

  return (
    <div className="banner-component">
      <div className="image-container">
        <img
          src={category.imageUrl}
          alt={category.name}
          className="banner-image"
        />
      </div>
      <div className="content">
        <h2 className="heading"> {category.name} </h2>
        <p className="desc"> {category.description} </p>
        <a href="/" role="link" className="link-button">
          {" "}
          Explore {category.key}{" "}
        </a>
      </div>
    </div>
  );
}

export default CategoryBanner;
