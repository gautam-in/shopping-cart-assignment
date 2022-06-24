import React, { useEffect, useState } from 'react';
import { StyledFilterItem, StyledFilterMenu } from './FilterMenu.styled';
import { useLocation, useNavigate } from "react-router-dom";

import { getCategories } from '../../services/ApiService';
import { selectedFilter } from '../../redux/slices/product-filter';
import { unwrapResult } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const FilterMenu = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [filterMenuList, setFilterMenuList] = useState([]);
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/");

  const filterHandler = (e) => {
    dispatch(selectedFilter(e.target.id));
    navigate(`/product/${e.target.id}`, { replace: true });
  };

  useEffect(() => {
    dispatch(getCategories())
      .then(unwrapResult)
      .then((categoryData) => {
        const menuList = categoryData?.filter((menuItem) => menuItem.order > 0);
        menuList.push({
          id: 'all',
          enabled: true,
          name: 'All',
          order: 0,
        });
        setFilterMenuList(menuList);
      })
      .catch((error) => error);
  }, [dispatch]);

  return (
    <StyledFilterMenu>
      {filterMenuList.map((filterMenuItem) => {
        return (
          <StyledFilterItem
            order={filterMenuItem.order}
            key={filterMenuItem.id}
            id={filterMenuItem.id}
            className={splitLocation[2] === filterMenuItem.id ? "active" : ""}
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
