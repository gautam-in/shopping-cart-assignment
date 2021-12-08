import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/Category.css";

function Category({ name, src, des, label, id, reverse }) {
  const navigate = useNavigate();
  const exploreHandler = (value) => {
    navigate(`/products/${value}`);
  };

  return (
    <div className={`category ${reverse ? "category_reverse" : ""}`}>
      <img src={src} alt="not found" />
      <div>
        <h3>{name}</h3>
        <p className="category_desc">{des}</p>
        <button onClick={() => exploreHandler(id)} className="explore_button">
          Explore {label}
        </button>
      </div>
    </div>
  );
}

export default Category;
