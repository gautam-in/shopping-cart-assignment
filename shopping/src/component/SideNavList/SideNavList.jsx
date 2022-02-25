import React from "react";
import CategoryData from "../../server/categories/index.get.json";

function SideNavList(props) {
  return (
    <ul>
      {CategoryData.map((item, index) => {
        return (
          <li key={item.id}>
            <button
              type="button"
              className={props.toggleElement ? "activeClass" : undefined}
              onClick={() => {
                props.clickprops(item.id, item);
              }}
            >
              {item.name}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default SideNavList;
