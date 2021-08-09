import Button, { ButtonType } from "components/button/button";
import { CategoryItem, CategoryList } from "models/home";
import { allRoutes } from "navigation/allRouteNames";
import React from "react";

interface IProps {
  getCategoriesData: CategoryList;
  history: { push: Function };
}

const CategoriesPage = (props: IProps): React.ReactElement => {
  const { getCategoriesData, history } = props;
  const filteredCategories = getCategoriesData.categories.filter(function (category) {
    if (category.key !== "seafood") return category;
    return 0;
  });

  const handleExplore = (category: CategoryItem) => {
    history.push({ pathname: allRoutes.PLP, state: { id: category.id } });
  };
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
                <Button type={ButtonType.Secondary} id={`explore-${category.key}`} customClass={"category-button"} onClick={() => handleExplore(category)}>{`Explore ${category.key}`}</Button>
              </div>
            </div>
          );
        })}
    </>
    // </div>
  );
};

export default CategoriesPage;
