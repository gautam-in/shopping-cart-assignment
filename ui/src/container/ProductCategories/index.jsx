import PropTypes from "prop-types";
import "./productCategories.scss";

const ProductCategories = ({ categoriesInfo }) => {
  const category = categoriesInfo
    .sort((a, b) => a.order - b.order)
    .map((category) => {
      if (category.order < 0) return null;
      return (
        <li key={category.key} onClick={() => {}}>
          {category.name}
        </li>
      );
    });
  return (
    <div className="categories-list">
      <ul>{category}</ul>
    </div>
  );
};

ProductCategories.prototype = {
  categoriesInfo: PropTypes.array.isRequired,
};

export default ProductCategories;
