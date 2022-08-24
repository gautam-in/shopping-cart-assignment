import PropTypes from "prop-types";
import "./category-list.styles.scss";
export const CategoryList = ({ data }) => {
  return data.map(({ id, description, name, imageUrl }, index) => {
    return (
      <div key={id} className="category-container">
        {index % 2 === 0 && (
          <div className="category-img">
            <img src={imageUrl} alt={name} />
          </div>
        )}
        <div className="category-info">
          <div className="category-title">{name}</div>
          <div className="category-desc">{description}</div>
        </div>
        {index % 2 !== 0 && (
          <div className="category-img">
            <img src={imageUrl} alt={name} />
          </div>
        )}
      </div>
    );
  });
};
CategoryList.propTypes = {
  data: PropTypes.array,
};
