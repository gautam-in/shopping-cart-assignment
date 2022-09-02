import PropTypes from "prop-types";
import "./categories-menu.styles.scss";
import Select from "react-select";
import variables from "../../_variables.module.scss";
export const CategoriesMenu = ({
  data,
  isLoading,
  selectCategoryId,
  selectedCategoryId,
}) => {
  const options = data.map(({ name, id }) => {
    return { value: name, label: name, id: id };
  });
  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: variables.primary_color,
      display: "grid",
      gridTemplateColumns: "18fr 1fr",
    }),
    option: (styles) => {
      return { ...styles, color: variables.white_color };
    },
    placeholder: () => ({
      color: variables.white_color,
    }),
    dropdownIndicator: () => ({
      color: variables.white_color,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menuList: () => ({
      backgroundColor: variables.primary_color,
    }),
    singleValue: () => ({
      color: variables.white_color,
    }),
    valueContainer: () => ({
      display: "flex",
      paddingLeft: "20px",
      alignitems: "center",
    }),
  };
  const selectCategory = (selectedOption) => {
    selectCategoryId(selectedOption.id);
  };
  return (
    <>
      <aside className="categories-menu-container">
        {!isLoading ? (
          data?.map(({ name, id }) => {
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
          })
        ) : (
          <div>Loading...</div>
        )}
      </aside>
      <Select
        placeholder="Select category"
        options={options}
        className="categories-menu-select-drop-down"
        styles={customStyles}
        onChange={selectCategory}
      />
    </>
  );
};

CategoriesMenu.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  selectCategoryId: PropTypes.func,
  selectedCategoryId: PropTypes.string,
};
