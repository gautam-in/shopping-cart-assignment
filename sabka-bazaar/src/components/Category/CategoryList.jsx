import PropTypes from "prop-types";
import { Button } from "../Button/Button";
import "./category-list.styles.scss";
import { CategoryImage } from "./CategoryImage";

export const CategoryList = ({ data }) => {
  return data.map(({ id, description, name, imageUrl, key }, index) => {
    return (
      <div key={id} className="category-container">
        {index % 2 === 0 && (
          <CategoryImage name={name} imageUrl={imageUrl} evenIndex />
        )}
        <div className="category-info">
          <div className="category-title">{name}</div>
          <div className="category-desc">{description}</div>

          <Button>Explore {key}</Button>
        </div>
        {index % 2 !== 0 && <CategoryImage name={name} imageUrl={imageUrl} />}
      </div>
    );
  });
};
CategoryList.propTypes = {
  data: PropTypes.array,
};
