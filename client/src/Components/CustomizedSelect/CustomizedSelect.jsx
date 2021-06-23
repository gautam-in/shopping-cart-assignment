import React, { useState, useContext } from "react";
import { CategoryContext } from "Context/CategoryContext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./CustomizedSelect.scss";

export default (props) => {
  const [selected, setSelected] = useState("All");
  const [showList, setShowList] = useState(false);
  const { handleFilter } = props;
  const categories = useContext(CategoryContext);

  const handleViewList = (e) => {
    setShowList(!showList);
  };

  const handleClick = (e) => {
    const name = e.target.getAttribute("name");
    console.log("handleClick::name", name, e);
    setSelected(e.target.innerHTML);
    setShowList(!showList);
    handleFilter(name);
  };
  return (
    <section className="section-cust-select">
      <div className="show-label">
        <div>{selected}</div>
        <div onClick={handleViewList}>
          <ExpandMoreIcon />
        </div>
      </div>
      {showList && (
        <div className="list">
          <div name={""} onClick={handleClick} className="items">
            {"All"}
          </div>
          {categories.map((category) => (
            <div name={category.id} onClick={handleClick} className="items">
              {category.name}
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
