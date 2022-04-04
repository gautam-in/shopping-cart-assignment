import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./ItemsCategories.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAction } from "../../Store/Category/category.action";

export default function ItemsCategories() {
  const categories = useSelector((state) => state.categories.allCategories);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  return (
    <div>
      {!categories.length ? (
        <div>Loading...</div>
      ) : (
        categories.map((category) => (
          <div className="category" key={category.id}>
            <div className="category-img">
              <img src={category.imageUrl} alt={category.name} />
            </div>
            <div className="category-info">
              <div className="category-title">{category.name}</div>
              <div className="category-desc">{category.description}</div>
              <button
                className="category-btn"
                onClick={() => navigate(`products/${category.id}`)}
              >
                {category.name}
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
