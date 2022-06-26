import { StyledFilterItem, StyledFilterMenu } from './FilterMenu.styled';

import React from 'react';
import useProductFilter from '../../hooks/useProductFilter';

const FilterMenu = ({categoryId}) => {

  const {filterMenuList,filterClickHandler} = useProductFilter();

  return (
    <StyledFilterMenu>
      {filterMenuList.map((filterMenuItem) => {
        return (
          <StyledFilterItem
            order={filterMenuItem.order}
            key={filterMenuItem.id}
            id={filterMenuItem.id}
            className={categoryId === filterMenuItem.id ? "active" : ""}
            onClick={(e) => filterClickHandler(e)}
          >
            {filterMenuItem.name}
          </StyledFilterItem>
        );
      })}
    </StyledFilterMenu>
  );
};

export default FilterMenu;
