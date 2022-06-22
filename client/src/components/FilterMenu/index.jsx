import React, { useEffect, useState } from 'react';
import { StyledFilterItem, StyledFilterMenu } from './FilterMenu.styled';

import { getCategories } from '../../services/ApiService';
import { selectedFilter } from '../../redux/slices/product-filter';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const FilterMenu = () => {
  const dispatch = useDispatch();
  const [filterMenuList, setFilterMenuList] = useState([]);

  const filterHandler = (e) => {
    dispatch(selectedFilter(e.target.id));
  };

  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then((categoryData) => {
        const menuList = categoryData?.filter((menuItem) => menuItem.order > 0);
        setFilterMenuList(menuList);
      })
      .catch((error) => error);
  }, [dispatch]);

  return (
    <StyledFilterMenu>
      <StyledFilterItem
        className={`all`}
        id="all"
        onClick={(e) => filterHandler(e)}
      >
        All
      </StyledFilterItem>
      {filterMenuList.map((filterMenuItem) => {
        return (
          <StyledFilterItem
            order={filterMenuItem.order}
            key={filterMenuItem.id}
            id={filterMenuItem.id}
            onClick={(e) => filterHandler(e)}
          >
            {filterMenuItem.name}
          </StyledFilterItem>
        );
      })}
    </StyledFilterMenu>
  );
};

export default FilterMenu;
