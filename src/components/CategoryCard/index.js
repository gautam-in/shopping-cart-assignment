import React from "react";
import Button from "../Button";
import Text from "../Text";
import "./style.scss";

const CategoryCard = ({ category }) => {
  return (
    <div className="categoryCard">
      <img src={category.imageUrl} alt={category.name} aria-hidden/>
      <div className="categoryCard__caption">
        <h4>{category.name}</h4>
        <Text>{category.description}</Text>
        <Button ariaLabel={`Explore ${category.name}`}>Explore {category.name}</Button>
      </div>
    </div>
  );
};

export default CategoryCard;
