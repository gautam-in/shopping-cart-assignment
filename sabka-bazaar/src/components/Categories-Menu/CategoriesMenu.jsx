import PropTypes from "prop-types";
import "./categories-menu.styles.scss";
import Select from "react-select";
import variables from "../../_variables.module.scss";
import { memo } from "react";
import SideBar from "./SideBar";
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
const CategoriesMenu = ({ data, selectCategoryId, selectedCategoryId }) => {
  const options = data.map(({ name, id }) => {
    return { value: name, label: name, id: id };
  });

  const selectCategory = (selectedOption) => {
    selectCategoryId(selectedOption.id);
  };
  return (
    <>
      <SideBar
        data={data}
        selectCategoryId={selectCategoryId}
        selectedCategoryId={selectedCategoryId}
      />
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
export default memo(CategoriesMenu);
CategoriesMenu.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
  selectCategoryId: PropTypes.func,
  selectedCategoryId: PropTypes.string,
};
