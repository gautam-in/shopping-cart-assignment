import React, { useContext } from "react";
import { CategoryContext } from "Context/CategoryContext";

import "./leftMenu.scss";

export default (props) => {
  const { handleFilter } = props;
  const categories = useContext(CategoryContext);

  const handleClick = (e) => {
    const name = e.target.getAttribute("name");
    console.log("handleClick::name", name);
    handleFilter(name);
  };
  return (
    <section className="left-menu">
      <div className="main-container">
        <div name={""} onClick={handleClick} className="items">
          {"All"}
        </div>
        {categories.map((category) => (
          <div name={category.id} onClick={handleClick} className="items">
            {category.name}
          </div>
        ))}
      </div>
    </section>
  );
};
