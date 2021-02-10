import React from "react";
import "./FilterBar.scss";

const FilterBar = (props) => {
  return (
    props.categories.length > 0 && (
      <div className="filterBarContainer">
        {props.categories.map(
          (item) =>
            item.order > 0 && (
              <a
                key={item.key}
                href={window.location.href}
                className={
                  props.activeTab === item.id
                    ? "active subContainer"
                    : "subContainer"
                }
                onClick={() => props.handleClick(item.id)}
              >
                {item.name}
              </a>
            )
        )}
      </div>
    )
  );
};

export default FilterBar;
