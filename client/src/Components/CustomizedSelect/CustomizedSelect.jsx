import React, { useState, useContext, useEffect } from "react";
import { CategoryContext } from "Context/CategoryContext";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import "./CustomizedSelect.scss";

export default (props) => {
  const { handleFilter, selected } = props;
  const categories = useContext(CategoryContext);
  const [selectedText, setSelectedText] = useState("");
  const [showList, setShowList] = useState(false);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    const all = { name: "ALL", id: "" };
    const list = categories;
    const firstItem = list.find((x) => x.id === "");
    if (!firstItem) list.unshift(all);
    setMenuList(list);
  }, [categories]);

  useEffect(() => {
    const item = menuList.find((x) => x.id === selected);
    setSelectedText(item?.name || "ALL");
  }, [selected]);

  const handleViewList = (e) => {
    setShowList(!showList);
  };

  const handleClick = (e) => {
    const name = e.target.getAttribute("name");
    console.log("handleClick::name", name, e);
    setShowList(!showList);
    handleFilter(name);
  };
  return (
    <section className="section-cust-select">
      <div className="show-label">
        <div>{selectedText}</div>
        <div onClick={handleViewList}>
          <ExpandMoreIcon />
        </div>
      </div>
      {showList && (
        <div className="list">
          {menuList.map((menu) => {
            return (
              menu.id !== selected && (
                <div name={menu.id} onClick={handleClick} className={`items`}>
                  {menu.name}
                </div>
              )
            );
          })}
        </div>
      )}
    </section>
  );
};
