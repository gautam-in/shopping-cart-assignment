import React from "react";
import "./categorybar.styles.scss";
import Button from "../Button/button.component";

function CategoryBar({ imageURL, name, id, desc, className, onClick }) {
  return (
    <div className={className} key={id}>
      <div className="categoryImage-container">
        <img
          className="category-image"
          src={`${process.env.PUBLIC_URL}${imageURL}`}
          alt={name}
          key={id}
        />
      </div>
      <div className="categoryText-container">
        <h2 className="category-title">{name}</h2>
        <p>{desc}</p>
        <div className="category-button">
          <Button text={`Explore ${name}`} onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

export default CategoryBar;
