import React, { useState } from "react";

import Aux from "../../hoc/Aux/Aux";
import Button from "../UI/Button/Button";
import Classes from "./SideNavigation.css";

const SideNavigation = ({
  categories,
  clickHandleFilter,
  filerData,
  filterSelect,
}) => {
  const [open, setOpen] = useState(false);
  const openFilter = () => {
    setOpen(!open);
  };

  const filterHandler = (categoryId, categoryValue) => {
    if (categoryId === filterSelect) {
      clickHandleFilter("all", "All Categories");
    } else {
      clickHandleFilter(categoryId, categoryValue);
    }
    setOpen(!open);
  };

  return (
    <Aux>
      <div className={Classes.CategoryDropdown}>
        <Button CustomBtn={Classes.CustomCategoryBtn} clicked={openFilter}>
          {/* <div className={Classes.DropdownIconWrap} onClick={openFilter}> */}
          <div className={Classes.DropdownContent}>{filerData}</div>
          <i className={`fa fa-angle-down ${Classes.IconWrap}`}></i>
          {/* </div> */}
        </Button>
      </div>
      <div
        className={
          open
            ? `${Classes.SideNavigationWrapper} ${Classes.active}`
            : `${Classes.SideNavigationWrapper} ${Classes.inactive}`
        }
      >
        {categories &&
          categories.length > 0 &&
          categories.map((item, index) => {
            return item.enabled ? (
              <div
                key={item.id}
                className={
                  filterSelect === item.id
                    ? `${Classes.CategoriesWrap} ${Classes.CategoriesSelect}`
                    : `${Classes.CategoriesWrap}`
                }
                onClick={() => filterHandler(item.id, item.name)}
              >
                {item.name}
              </div>
            ) : null;
          })}
      </div>
    </Aux>
  );
};
export default SideNavigation;
