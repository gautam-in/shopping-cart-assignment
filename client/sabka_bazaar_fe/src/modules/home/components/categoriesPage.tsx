import Button, { ButtonType } from "components/button/button";
import { CategoryList } from "models/home";
import React from "react";

interface IProps {
  getCategoriesData: CategoryList;
}

const CategoriesPage = (props: IProps): React.ReactElement => {
  const { getCategoriesData } = props;
  const filteredCategories = getCategoriesData.categories.filter(function (category) {
    if (category.key !== "seafood") return category;
    return 0;
  });
  return (
    // <div className="categories">
    <>
      {filteredCategories &&
        filteredCategories.map((category) => {
          return (
            <div className="category-card" key={category.key}>
              <img src={category.imageUrl} alt={category.name} />
              <div className="category-text">
                <h2>{category.name}</h2>
                <p>{category.description}</p>
                <Button type={ButtonType.Secondary} id={`explore-${category.key}`} customClass={"category-button"}>{`Explore ${category.key}`}</Button>
              </div>
            </div>
          );
        })}
    </>
    // </div>
  );
};

export default CategoriesPage;
