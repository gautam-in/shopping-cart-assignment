import React from "react";

import "./style.scss";

const Dropdown = ({
  ariaLabel = "",
  ariaHidden = false,
  className = "",
  changeHandler,
  disabled = false,
  options = [],
  value = "",
  ...otherProps
}) => {
  return (
    <select
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
      className={`select-dropdown ${className}`}
      disabled={disabled}
      onChange={changeHandler}
      value={value}
      {...otherProps}
    >
      <option className="select-dropdown__option" value={""}>All Products</option>
      {options.map((option) => (
        <option className="select-dropdown__option" key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
