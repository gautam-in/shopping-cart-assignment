import React, { useState } from 'react';
import { ProductCategoryFilterDropdownContainer } from './ProductCategoryFilterDropdown.styled';
import { useDispatch } from 'react-redux';
import { handleCurrentProductCategory } from '../../store/products/productSlice';

const ProductCategoryFilterDropdown = ({ options, onChange, className, value }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const toggleDropdown = () => {
    setOpen(!open);
  };

  const handleOptionSelect = (option, id) => {
    setOpen(false);
    dispatch(handleCurrentProductCategory(id))
  };

  return (
    <ProductCategoryFilterDropdownContainer>
    <div className={`select-dropdown ${className}`}>
      <div className="selected-option" onClick={toggleDropdown}>
        {value ? options.find(({ id }) => id === value).name : options[0].name}
        <i className={`arrow ${open ? 'up' : 'down'}`} />
      </div>
      {open && (
        <ul className="options">
          {options.map((option) => (
            <li
              key={option.id}
              className="option"
              onClick={() => handleOptionSelect(option.name, option.id)}
            >
              {option.name}
            </li>
          ))}
        </ul>
      )}
    </div>
    </ProductCategoryFilterDropdownContainer>
  );
};

export default ProductCategoryFilterDropdown

