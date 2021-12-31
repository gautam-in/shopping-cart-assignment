import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useNavigate }from 'react-router-dom';

import { selectCategories } from './../../redux/Home/selectors';

const DropdownWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const SelectField = styled.select`
  width: 100%;
  padding: 10px;
  outline: none;
  background-color: #BF2957;
  color: #ffffff;
`;

const Dropdown = ({ filterId }) => {
  const filters = useSelector(selectCategories);
  const navigate = useNavigate();

  const handleChange = ev => {
    const { value } = ev.target;
    navigate(`/products/${value}`);
  }
  return (
    <DropdownWrapper aria-modal="true" role="alertdialog">
      <SelectField onChange={handleChange} value={filterId}>
        <option 
          key="default_category" 
          value=""
          aria-label="All Products">
            All Products
        </option>
        {filters.map(filter => {
            const { id, name, key } = filter;
            return (
              <option 
                key={id}
                value={key}
                aria-label={name}>
                  {name}
              </option>
            );
          })}
      </SelectField>
    </DropdownWrapper>
  );
}

export default Dropdown;