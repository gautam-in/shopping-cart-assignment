import React, { useState } from "react";
import Button from "../Button";
import { ReactComponent as UpArrow } from "./../../assets/up_arrow.svg";
import { ReactComponent as DownArrow } from "./../../assets/down_arrow.svg";
import "./style.scss";

function DropDown(props) {
  const { list, categoryClickHandler } = props;
  const [isListOpen, setIsListOpen] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("All Products");

  const toggleList = () => {
    setIsListOpen((prev) => !prev);
  };

  const selectItem = (product) => {
    const { name, id } = product;
    if (name === headerTitle) setHeaderTitle("All Products");
    else setHeaderTitle(name);
    setIsListOpen(false);
    categoryClickHandler(id);
  };

  return (
    <div className="ddWrapper">
      <Button type="button" className="dd__header" onClick={toggleList}>
        <span>{headerTitle}</span>
        {isListOpen ? (
          <UpArrow className="dd_arrow" />
        ) : (
          <DownArrow className="dd_arrow" />
        )}
      </Button>
      {isListOpen && (
        <div role="list">
          {list.map((item) => (
            <Button
              type="button"
              className="dd__listItem"
              key={item.id}
              onClick={() => selectItem(item)}
            >
              {item.name}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default DropDown;
