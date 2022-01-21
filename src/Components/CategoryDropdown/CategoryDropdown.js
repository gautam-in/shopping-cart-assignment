import { useState } from "react";
import Button from "../UI Components/Button/Button";
import "./CategoryDropdown.scss";

const CategoryDropdown = ({ categories = [], handleClick }) => {
  const [isActive, setIsActive] = useState(false);
  const [name, setCategoryName] = useState("All Products");
  const handleDropdown = () => {
    setIsActive((prevState) => !prevState);
  };
  const handleSelectedCategoryName = (name) => {
    setCategoryName(name);
  };
  return (
    <div className="dropdown">
      <Button onClick={() => handleDropdown()} className="dropdown__button">
        <span>{name}</span>
        <span>&#x25BC;</span>
      </Button>
      <ul className="drodown__list">
        {categories &&
          categories.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  isActive
                    ? "dropdown__list__item show"
                    : "dropdown__list__item"
                }
                onClick={() => {
                  handleDropdown();
                  handleClick(item.id);
                  handleSelectedCategoryName(name);
                }}
              >
                {item.name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CategoryDropdown;
