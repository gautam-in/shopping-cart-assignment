import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { getCategoryList } from '../../services/ApiService'
import { StyledFilterItem, StyledFilterMenu } from './FilterMenu.styled';

const FilterMenu = () => {

  const [filterMenuList, setFilterMenuList] = useState([]);

  useEffect(() => {
    async function getCategory() {
      const filterList = await getCategoryList();
      const menuList = filterList?.filter((menuItem) => (menuItem.order > 0))
      setFilterMenuList(menuList);
    }

    getCategory();
  }, []);
  

  return (
        <StyledFilterMenu>
          <StyledFilterItem className='all'>All</StyledFilterItem>
            {
                filterMenuList.map((filterMenuItem) => (
                  <StyledFilterItem order={filterMenuItem.order} key={filterMenuItem.id}>{filterMenuItem.name}</StyledFilterItem>
                ))
            }
        </StyledFilterMenu>
  )
}

export default FilterMenu;