import React, { Fragment, useState } from "react";
import "./categories.styles.css";

const Categories = ({ categories, onClickCategoryHandler }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCategoriesList, setShowCategoriesList] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");

  const changeCategoryHandler = (categoryId) => {
    const category = selectedCategory === categoryId ? "" : categoryId;

    onClickCategoryHandler(category);
    setSelectedCategory(category);
  };

  const changeCategoryMobileHandler = (categoryName, categoryId) => {
    setActiveCategory(categoryName);
    onClickCategoryHandler(categoryId);
    setShowCategoriesList(false);
  };

  return (
    <Fragment>
      <div className="product-categories">
        <ul>
          {categories.length > 0 &&
            categories.map(({ name, id }) => (
              <li
                key={id}
                className={`category ${
                  selectedCategory === id ? "active-category" : ""
                }`}
                onClick={() => changeCategoryHandler(id)}
              >
                {name}
              </li>
            ))}
        </ul>
      </div>
      <div className="product-categories-mobile">
        <div
          className="active-category-mobile"
          onClick={() => setShowCategoriesList(!showCategoriesList)}
        >
          <span> {activeCategory}</span>
          {showCategoriesList ? (
            <ion-icon name="chevron-up-outline"></ion-icon>
          ) : (
            <ion-icon name="chevron-down-outline"></ion-icon>
          )}
        </div>
        {showCategoriesList && (
          <div className="mobile-cateogories-list">
            <ul>
              {categories.length > 0 &&
                categories.map(({ name, id }) => (
                  <li
                    key={id}
                    onClick={() => changeCategoryMobileHandler(name, id)}
                  >
                    {name}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Categories;
