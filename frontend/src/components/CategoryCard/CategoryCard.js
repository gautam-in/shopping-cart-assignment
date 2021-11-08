import React from "react";
import "./CategoryCard.scss";

export default function CategoryCard(props) {
  const { category } = props;
  return (
    <div className="category-card">
      <div className="image">
        <img src={`http://127.0.0.1:5000/${category.imageUrl}`} alt="" />
      </div>

      <div className="desc">
        <h3>{category.name}</h3>
        <h4>{category.description}</h4>
        <button type="submit">Explore {category.key}</button>
      </div>
    </div>
  );
}
