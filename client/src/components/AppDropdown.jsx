import { useState } from "react";
import "../assets/styles/components/AppDropdown.scss";
import chevronIcon from "/static/images/chevron.svg";

const AppDropdown = ({ options, handleSelect, selectedText }) => {
  const [open, setOpen] = useState(false);

  const handleDropdownToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="app-dropdown">
      <button
        className="dropdown-trigger"
        aria-pressed={open}
        onClick={handleDropdownToggle}
      >
        <span>{selectedText}</span>

        <span>
          <img src={chevronIcon} alt="chevron-down" className="chevron" />
        </span>
      </button>

      <div className="dropdown-items">
        <ul className="dropdown-list">
          {options.map((option) => (
            <li
              key={option.id}
              className={`dropdown-list-item ${
                option.name === selectedText ? "selected" : ""
              }`}
              onClick={() => {
                handleSelect(option);
                handleDropdownToggle();
              }}
              tabIndex="0"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSelect(option);
                  handleDropdownToggle();
                }
              }}
            >
              {option.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AppDropdown;
