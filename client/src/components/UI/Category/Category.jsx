import React from "react";
import { withRouter } from "react-router";
import Button from "../Button/Button";

import "./Category.scss";
function Category(props) {
  const { categories } = props;

  const handleClick = (data) => {
    props.history.push({
      pathname: `/products`,
      data,
    });
  };
  return (
    <div data-test="component-category">
      {categories.map((category, index) => {
        return (
          <div
            className="categoryContainer"
            style={{ flexDirection: index % 2 === 0 ? null : "row-reverse" }}
            key={category.id}
          >
            <img
              src={category.imageUrl}
              className="categoryImage"
              alt="Not found"
              data-test="category-image"
            />
            <div className="info">
              <h2>{category.name}</h2>
              <div style={{ marginBottom: "10px" }}>{category.description}</div>
              <Button
                text={`Explore ${category.key}`}
                onClick={() => handleClick(category.id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default withRouter(Category);
