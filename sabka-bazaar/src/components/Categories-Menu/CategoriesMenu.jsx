import PropTypes from "prop-types";
import "./categories-menu.styles.scss";
export const CategoriesMenu = ({ data, isLoading, selectCategoryId }) => {
  return (
    <aside className="categories-menu-container">
      {!isLoading ? (
        data?.map(({ name, id }) => {
          return (
            <div
              role="button"
              key={id}
              className="category-menu-item"
              onClick={() => selectCategoryId(id)}
            >
              <p>{name}</p>
            </div>
          );
        })
      ) : (
        <div>Loading...</div>
      )}
    </aside>
  );
};

CategoriesMenu.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  selectCategoryId: PropTypes.func,
};
