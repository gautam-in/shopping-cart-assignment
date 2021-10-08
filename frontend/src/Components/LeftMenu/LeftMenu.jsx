import React, { useState, useEffect } from "react";
import "./leftMenu.scss";

const LeftMenu = (props) => {
  const { handleFilter, categories, selected } = props;
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    const all = { name: "All", id: "" };
    const list = categories;
    if (!list || !Array.isArray(list)) return;
    const firstItem = list?.find((x) => x.id === "");
    if (!firstItem) list.unshift(all);
    setMenuList(list);
  }, [categories]);

  const handleClick = (e) => {
    const name = e.target.getAttribute("name");
    handleFilter(name);
  };
  return (
    <section className="sidebar-menu">
      <div className="sidebar-container">
        {menuList.map((menu) => (
          <div
            key={menu.id}
            name={menu.id}
            onClick={handleClick}
            className={`products-categories ${menu.id === selected ? "active-category" : ""}`}
          >
            {menu.name}
          </div>
        ))}
      </div>
    </section>
  );
};
export default LeftMenu;
