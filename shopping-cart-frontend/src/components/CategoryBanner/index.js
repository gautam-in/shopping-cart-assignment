import { useCallback } from "react";
import "./CategoryBanner.scss";

const CategoryBanner = ({ category, openCategory }) => {
  const handleCategory = useCallback(
    (id) => () => {
      openCategory(id);
    },
    [openCategory]
  );

  return (
    <div className="banner-component">
      <div className="image-container">
        <img
          src={category.imageUrl}
          alt={category.name}
        />
      </div>
      <div className="content">
        <h2 className="heading">{category.name}</h2>
        <p className="desc">{category.description}</p>
        <button className="button" onClick={handleCategory(category.id)}>
          Explore {category.key}
        </button>
      </div>
    </div>
  );
};

export default CategoryBanner;
