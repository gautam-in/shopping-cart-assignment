import React, { useContext, useState, useEffect } from "react";
import { CategoryContext } from "Context/CategoryContext";

import "./leftMenu.scss";

export default (props) => {
  const { handleFilter, selected } = props;
  const categories = useContext(CategoryContext);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    const all = { name: "All", id: "" };
    const list = categories;
    const firstItem = list.find((x) => x.id === "");
    if (!firstItem) list.unshift(all);
    setMenuList(list);
  }, [categories]);

  const handleClick = (e) => {
    const name = e.target.getAttribute("name");
    console.log("handleClick::name", name);
    handleFilter(name);
  };
  return (
    <section className="left-menu">
      <div className="main-container">
        {menuList.map((menu) => (
          <div
            name={menu.id}
            onClick={handleClick}
            className={`items ${menu.id === selected ? "selected-item" : ""}`}
          >
            {menu.name}
          </div>
        ))}
      </div>
    </section>
  );
};
