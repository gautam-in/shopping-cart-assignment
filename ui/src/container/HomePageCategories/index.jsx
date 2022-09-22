import PropTypes from "prop-types";

import { Button, Divider } from "../../components";
import "./homePageCategories.scss";

const HomePageCategories = ({ categories }) => {
  const explore = () => {};

  const categoryList = categories
    .sort((a, b) => a.order - b.order)
    .map((category, index) => {
      if (category.order < 0) return null;
      return (
        <li key={category.key}>
          <Divider />
          <div
            className={`category-list ${index % 2 === 0 && "toggle-content"}`}
          >
            <img src={category.imageUrl} alt={category.name} />
            <div className="description">
              <h2>{category.name}</h2>
              <p>{category.description}</p>
              <div className="category-button">
                <Button onClickHandler={explore}>Explore {category.key}</Button>
              </div>
            </div>
          </div>
        </li>
      );
    });

  return <ul className="homePageCategories">{categoryList}</ul>;
};

HomePageCategories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default HomePageCategories;
