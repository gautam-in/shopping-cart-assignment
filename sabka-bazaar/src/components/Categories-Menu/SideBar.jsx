import PropTypes from "prop-types";
const SideBar = ({ data, selectCategoryId, selectedCategoryId }) => {
  return (
    <aside className="categories-menu-container">
      {data?.map(({ name, id }) => {
        return (
          <div
            role="button"
            tabIndex="0"
            key={id}
            className={
              selectedCategoryId === id
                ? "category-menu-item active"
                : "category-menu-item"
            }
            onClick={() => selectCategoryId(id)}
          >
            {name}
          </div>
        );
      })}
    </aside>
  );
};
SideBar.propTypes = {
  data: PropTypes.array,
  selectCategoryId: PropTypes.func,
  selectedCategoryId: PropTypes.string,
};
export default SideBar;
