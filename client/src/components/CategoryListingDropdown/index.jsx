import React from "react";

import "./CategoryListingDropdown.scss";

export default function CategoryListingDropdown({
  categories,
  onChange,
  selectedCategory,
}) {
  return (
    <select
      className="CategoryListingDropdown"
      onChange={(e) => onChange(e.target.value)}
      value={selectedCategory}
    >
      <option value="">All </option>
      {categories.map((category) => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
      CategoryListingdropdwon
    </select>
  );
}
