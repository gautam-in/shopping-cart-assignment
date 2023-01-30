import React from "react";
import { ICategoriesData } from "../../../pages/Home";

export interface IsidebarProps {
  data: ICategoriesData[];
  menuClickHandler: (filterKey: string) => void;
  activeMenu: string;
}

const Sidebar: React.FC<IsidebarProps> = ({
  data,
  menuClickHandler,
  activeMenu,
}) => {
  return (
    <nav className="product-nav">
      <ul className="side-nav">
        <li
          onClick={() => menuClickHandler("0")}
          key="nav-0"
          className={`side-nav__item  ${
            activeMenu === "0" && "side-nav__item--active"
          }`}
        >
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            role="button"
            className="side-nav__link"
          >
            {" "}
            All Products{" "}
          </a>
        </li>
        {data.map((data: ICategoriesData, index: number) => {
          if (data.imageUrl === undefined) return "";
          return (
            <li
              onClick={() => menuClickHandler(data?.id)}
              key={`nav-${index}`}
              className={`side-nav__item  ${
                activeMenu === data?.id && "side-nav__item--active"
              }`}
            >
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                role="button"
                className="side-nav__link"
              >
                {" "}
                {data?.name}
              </a>
            </li>
          );
        })}
      </ul>
      <select
        value={activeMenu}
        onChange={(e) => menuClickHandler(e.target.value)}
      >
        <option value="0" key="0">
          All Products
        </option>
        {data.map((data: ICategoriesData, index: number) => {
          if (data.imageUrl === undefined) return "";
          return (
            <option value={data?.id} key={index}>
              {data.name}
            </option>
          );
        })}
      </select>
    </nav>
  );
};

export default Sidebar;
