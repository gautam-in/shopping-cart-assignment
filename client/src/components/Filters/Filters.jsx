import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate }from 'react-router-dom';

import { selectCategories } from './../../redux/Home/selectors';

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
  cursor: pointer;
`;

const Filters = () => {
  const filters = useSelector(selectCategories);
  const navigate = useNavigate();
  return (
    <FiltersWrapper>
      <FilterList>
        {filters.map(filter => {
          const { id, name, key } = filter;
          return (
            <FilterItem 
              onClick={() => navigate(`/products/${key}`)}
              key={id} >
                {name}
            </FilterItem>
          );
        })}
      </FilterList>
    </FiltersWrapper>
  );
}

export default Filters;
