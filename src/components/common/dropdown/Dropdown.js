import React from "react";
import "./Dropdown.scss";

const Dropdown = ({
  show,
  value,
  handleToggle,
  handleChange,
  DropdownList,
}) => {
  return (
    <div className="dropdownContainer">
      <label className={!show ? "arrow" : "arrow active"}>
        <input
          type="button"
          value={value}
          className="dropdown-btn"
          onClick={handleToggle}
        />
        <span className="carrot" />
      </label>

      <ul className="dropdownList" hidden={!show}>
        {DropdownList.map(
          (selectedValue) =>
            selectedValue.order > 0 && (
              <li
                key={selectedValue.id}
                className="option"
                onClick={() =>
                  handleChange(selectedValue.id, selectedValue.name)
                }
              >
                {selectedValue.name}
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
