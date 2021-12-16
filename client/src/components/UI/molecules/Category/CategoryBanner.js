import React from "react";
import { Link } from "react-router-dom";
// import Link from "./";
import "./Categories.scss";

const CategoryBanner = (props) => {
  const { category } = props;
  return (
    <li className="card-wrap">
      <div className="image-wrap">
        <img src={category.imageUrl} alt={category.name} />
      </div>
      <div className="text-wrap">
        <h2>{category.name}</h2>
        <p>{category.description}</p>
        <Link to="/product" role="link" className="explore-btn">
          Explore {category.key}
        </Link>
      </div>
    </li>
  );
};
export default CategoryBanner;
