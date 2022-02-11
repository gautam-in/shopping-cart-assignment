import React from "react";
import "./category-banner.styles.scss";
import { Link } from 'react-router-dom';

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
        <span className="link-button">
        <Link to='/products'>{" "}
          Explore {category.key}{" "}</Link>
        </span>
      </div>
    </div>
  );
}

export default CategoryBanner;