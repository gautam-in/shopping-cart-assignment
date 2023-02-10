import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentCategory } from "../Features/categories/categoriesSlice";

function CategoryItem({ category }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <article className="flex-column flex-sm-row">
      <div>
        <img
          loading="lazy"
          width="800"
          height="531"
          src={category.imageUrl}
          alt={category.name}
        />
      </div>
      <div className="text-center">
        <h1>{category.name}</h1>
        <p>{category.description}</p>
        <button
          onClick={() => {
            dispatch(setCurrentCategory(category.id));
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
