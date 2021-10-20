import React from "react";
import "./categoryBanner.scss";

export default function CategoryBanner(props) {
  const { category, openCategory } = props;

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
        <h2 className="heading">{category.name}</h2>
        <p className="desc">{category.description}</p>
        <button
          className="link-button"
          onClick={() => openCategory(category.id)}
        >
          Explore {category.key}
        </button>
      </div>
    </div>
  );
}
