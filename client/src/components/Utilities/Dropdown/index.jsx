import React, { useEffect, useState } from 'react';

import ReactSelect from 'react-select';
import { StyledSelect } from './Dropdown.styled';
import { getProductFilterOptions } from '../../../services/getFormattedDataServices';
import useProductFilter from '../../../hooks/useProductFilter';

const Dropdown = ({categoryId}) => {

  const {filterMenuList, filterChangeHandler} = useProductFilter();
  const [selectValue, setSelectValue] = useState('');

  useEffect(() => {
    setSelectValue(categoryId);
  }, [categoryId])
  
  const dropdownOptions = getProductFilterOptions(filterMenuList);

  return (
    <StyledSelect>
      <ReactSelect
        onChange={filterChangeHandler}
        options={dropdownOptions}
        isSearchable={false}
        className={`product-select`}
        classNamePrefix='product-select'
        defaultValue='All'
        value={dropdownOptions.find(obj => obj.value === selectValue)}
      />       
    </StyledSelect>
  )
}

export default Dropdown;