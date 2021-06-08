import React from "react";
import "./Dropdown.scss";
import Icon from "../../../assets/images/drop-down-arrow.svg";
import { Link } from "react-router-dom";

export default function Dropdown(props) {
  const [menu, setMenu] = React.useState(false);
  const [value, setValue] = React.useState(null);
  const { categories, setProductCategory, productCategory } = props;

  const handleSelectClick = (event) => {
    const id = event.target.value;
    setMenu(!menu);
    if (productCategory && productCategory === id) {
      return;
    } else {
      setProductCategory(id);
      setValue(id);
    }
  };

  return (
    <section className="dropdownContainer" data-test="component-dropdown">
      <select
        value={value}
        className="selectBox"
        onChange={handleSelectClick}
        data-test="dropdown-select"
      >
        {categories.map((category) => {
          return (
            <option
              key={category.id}
              value={category.id}
              className="dropdownContent"
            >
              {category.name}
            </option>
          );
        })}
      </select>
    </section>
  );
}
