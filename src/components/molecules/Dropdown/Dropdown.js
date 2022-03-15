import React, { useEffect, useState } from "react";
import "./Dropdown.scss";
import Button from "../../atoms/Button/Button";
import { useLocation } from "react-router";

export default function Dropdown({ items, handleProduct }) {
  const [isActive, setIsActive] = useState(true);
  const [name, setName] = useState("All Products");
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("/products/")) {
      const id = location.pathname.split("/")[2];
      items.find((item) => {
        if (item.id === id) {
          setName(item.name);
        }
      });
    }
  }, [location]);

  const handleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="dropdown">
      <Button onClick={() => handleDropdown()} className="dropdown__button">
        <span>{name}</span>
        <span>&#x25BC;</span>
      </Button>
      <ul className="dropdown__content">
        {items.map((item, index) => (
          <li
            onClick={() => {
              handleDropdown();
              handleProduct(item.id);
              setName(item.name);
            }}
            key={index}
            className={`${
              isActive
                ? "dropdown__content__list"
                : "dropdown__content__list show"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
