import React, { useEffect, useState } from "react";
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
  }, [location,items]);

  const handleDropdown = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="dropdown">
      <button onClick={() => handleDropdown()} className="dropdown-button">
        <span>{name}</span>
        <span>&#x25BC;</span>
      </button>
      <ul className="dropdown-content">
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
                ? "dropdown-content-list"
                : "dropdown-content-list show"
            }`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
