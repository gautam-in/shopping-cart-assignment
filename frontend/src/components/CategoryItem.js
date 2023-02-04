import React from "react";
import { useNavigate } from "react-router-dom";

function CategoryItem({ category }) {
  const navigate = useNavigate();

  return (
    <article className="flex-column flex-sm-row">
      <div>
        <img src={category.imageUrl} alt={category.name} />
      </div>
      <div className="text-center">
        <h1>{category.name}</h1>
        <p>{category.description}</p>
        <button
          onClick={() => {
            navigate(`/products`);
          }}
        >
          Explore {category.name}
        </button>
      </div>
    </article>
  );
}

export default CategoryItem;
