import React from "react";
import "./style.scss";
import { useParams } from "react-router-dom";

function SideBar(props) {
  const { list, clickHandler } = props;
  const { id } = useParams();

  return (
    <nav className="slist">
      <ul className="slist__container">
        {list.map((category) => {
          return (
            <li
              key={category.id}
              onClick={() => {
                clickHandler(category.id);
              }}
              className={
                id === category.id ? "slist__item active" : "slist__item"
              }
            >
              {category.name}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SideBar;
