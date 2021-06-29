import React from "react";
import { Link } from "react-router-dom";

const Button = React.lazy(() =>
  import(/* webpackChunkName: "CategoryCardButtonComponent" */ "../Button")
);
const Text = React.lazy(() =>
  import(/* webpackChunkName: "CategoryCardTextComponent" */ "../Text")
);

import "./style.scss";

const CategoryCard = ({ category }) => {
  return (
    <div className="categoryCard">
      <img src={category.imageUrl} alt={category.name} aria-hidden />
      <div className="categoryCard__caption">
        <h4>{category.name}</h4>
        <Text>{category.description}</Text>
        <Link
          role="button"
          aria-label={`Explore ${category.name} Products`}
          to={`/products/${category.id}`}
          tabIndex="0"
        >
          <Button tabIndex="-1">Explore {category.name}</Button>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
