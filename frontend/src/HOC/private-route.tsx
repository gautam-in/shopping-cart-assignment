import React, { useState } from "react";
import { Sidebar } from "../layout/sidebar";
import { Banners } from "../layout/banners";
import { Category } from "../apis/category";

interface Props {
  component: React.FC<{ selectedCategories: Category[] }>;
}

export const PrivateRoute: React.FC<Props> = ({ component: Component }) => {
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);

  const checkboxClickHandler = (
    _: React.ChangeEvent<HTMLInputElement>,
    category: Category
  ) => {
    if (_.target.checked) {
      setSelectedCategories((categories) => [...categories, category]);
    } else {
      const newSelectedCategories = [...selectedCategories].filter(
        (currCategory) => currCategory.id !== category.id
      );
      setSelectedCategories(newSelectedCategories);
    }
  };

  return (
    <div style={{ width: "90%", margin: "auto" }}>
      <main>
        <Banners />
        <div
          style={{
            display: "flex",
          }}
        >
          <Sidebar checkboxClickHandler={checkboxClickHandler} />
          <Component selectedCategories={selectedCategories} />
        </div>
      </main>
    </div>
  );
};
