import React from 'react';
import styled from 'styled-components';

const FiltersWrapper = styled.div`
  background-color: #eeeeee;
  width: 25%;
  font-size: 90%;
  min-height: 85vh;
  max-height: 100%;
`;

const FilterList = styled.ul`
  list-style-type: none;
  padding: 20px;
`;

const FilterItem = styled.li`
  padding: 10px 0px;
  border-bottom: 1px solid #aaaaaa;
`;

const Filters = () => {
  return (
    <FiltersWrapper>
      <FilterList>
        <FilterItem>{`Fruits & Vegetables`}</FilterItem>
        <FilterItem>Bakery Cakes and Dairy</FilterItem>
        <FilterItem>Beverages</FilterItem>
        <FilterItem>Beauty and Hygiene</FilterItem>
        <FilterItem>Baby Care</FilterItem>
      </FilterList>
    </FiltersWrapper>
  );
}

export default Filters;
