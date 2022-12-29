import React, { useState } from "react";
import { Sidebar } from "../layout/sidebar";
import { Banners } from "../layout/banners";
import { Category } from "../apis/category";
import { Header } from "../layout/header";
import "./private-route.scss";

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
    <>
      <Header />
      <div style={{ width: "90%", margin: "auto", paddingTop: "100px" }}>
        <main>
          <Banners />
          <div className="container">
            <Sidebar checkboxClickHandler={checkboxClickHandler} />
            <Component selectedCategories={selectedCategories} />
          </div>
        </main>
      </div>
    </>
  );
};
