import React from "react";
import Button from "../Button/Button";
import "./Category.scss";
export default function Category(props) {
  const { categories } = props;
  return categories.map((category, index) => {
    return (
      <div
        className="categoryContainer"
        style={{ flexDirection: index % 2 === 0 ? null : "row-reverse" }}
        key={category.id}
      >
        <img
          src={category.imageUrl}
          style={{ width: "300px" }}
          alt="Not found"
        />
        <div className="info">
          <h2>{category.name}</h2>
          <div style={{ marginBottom: "10px" }}>{category.description}</div>
          <Button text={`Explore ${category.key}`} />
        </div>
      </div>
    );
  });
}
