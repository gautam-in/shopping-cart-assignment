import React, { useState, useEffect } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./SelectProducts.scss";

const SelectProducts = (props) => {
  const { handleFilter, selected, categories } = props;
  const [selectedText, setSelectedText] = useState("");
  const [showList, setShowList] = useState(false);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    const all = { name: "ALL", id: "" };
    const list = categories;
    const firstItem = list?.find((x) => x.id === "");
    if (!firstItem) list?.unshift(all);
    setMenuList(list);
  }, [categories]);

  useEffect(() => {
    const item = menuList.find((x) => x.id === selected);
    setSelectedText(item?.name || "ALL");
  }, [selected, menuList]);

  const handleViewList = (e) => {
    setShowList(!showList);
  };

  const handleClick = (e) => {
    const name = e.target.getAttribute("name");
    setShowList(!showList);
    handleFilter(name);
  };
  return (
    <section className="products-category-acc">
      <div className="categories-accordian">
        <div>{selectedText}</div>
        <div onClick={handleViewList}>
          <ExpandMoreIcon />
        </div>
      </div>
      {showList && (
        <div className="categories-listview">
          {menuList?.map((menu) => {
            return (
              menu.id !== selected && (
                <div name={menu?.id} key={menu?.id} id={menu?.id} onClick={handleClick} className={`product-categoryitem`}>
                  {menu?.name}
                </div>
              )
            );
          })}
        </div>
      )}
    </section>
  );
};
export default SelectProducts;
