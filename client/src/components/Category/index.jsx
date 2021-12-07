import React from "react";

import "./Category.scss";

export default function Category({ category }) {
  return <p className="Category">{category.name}</p>;
}
