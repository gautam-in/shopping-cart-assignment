import React from "react";
import "./CategoryBanner.scss";

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
        <button className="link-button" onClick={()=>{ window.location.pathname = category.link }}>
        {" "}
          Explore {category.key}{" "}
        </button>
      </div>
    </div>
  );
}

export default CategoryBanner;
