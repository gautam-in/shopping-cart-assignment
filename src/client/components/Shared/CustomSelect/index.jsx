/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import withStyles from 'isomorphic-style-loader/withStyles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import styles from './CustomSelect.scss';

const CustomSelect = ({ categories, selected, onSelect }) => {
  const findSelected = categories.find((cat) => cat.id === selected);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(findSelected?.name);
  useEffect(() => {
    setSelectedOption(findSelected?.name);
  }, [findSelected]);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option) => () => {
    setSelectedOption(option.name);
    onSelect(option.id, selected);
    setIsOpen(false);
  };

  return (
    <div className="category-dropdown-container">
      <div className="dropdown-header" onClick={toggling} aria-hidden="true">
        {selectedOption || 'Select Category'}
        <NavigateNextIcon className="drop-down-icon" />
      </div>
      {isOpen && (
        <div className="dropdown-list-container">
          <ul className="dropdown-list">
            {categories.map((option) => (
              <li className="dropdown-list-item" onClick={onOptionClicked(option)} key={Math.random()}>
                {option.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default withStyles(styles)(CustomSelect);
