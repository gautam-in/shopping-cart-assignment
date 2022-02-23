import { useCallback } from "react";
import "./CategoryBanner.scss";

const CategoryBanner = ({ category, gotoCategory }) => {
  const selectCategory = useCallback(
    (id) => () => {
      gotoCategory(id);
    },
    [gotoCategory]
  );
  return (
    <div className="banner-component d-flex justify-content-between">
      <div className="image-container">
        <img
          className="banner-image"
          src={category.imageUrl}
          alt={category.name}
        />
      </div>
      <div className="content">
        <h2 className="heading">{category.name}</h2>
        <p className="desc">{category.description}</p>
        <button className="link-button" onClick={selectCategory(category.id)}>
          Explore {category.key}
        </button>
      </div>
    </div>
  );
};

export default CategoryBanner;
