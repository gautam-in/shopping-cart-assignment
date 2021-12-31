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
  padding: 10px 5px;
  border-bottom: 1px solid #aaaaaa;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
  }
`;

const Filters = ({ filterId }) => {
  const filters = useSelector(selectCategories);
  const navigate = useNavigate();
  return (
    <FiltersWrapper>
      <FilterList>
        {filters.map(filter => {
          const { id, name, key } = filter;
          return (
            <FilterItem 
              style={{
                backgroundColor: filterId === key ? '#ffffff' : ''
              }}
              role="button"
              aria-label={name}
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
