// react
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// components
import { IoIosArrowDown } from 'react-icons/io';

/**
 * @name Accordion
 * @param {array} accordionData This contains menu items in array of object format
 * @param {func} changeSelectedItem It filters Products Page data wrt applied filter
 * @returns JSX for accordion
 */
const Accordion = ({ accordionData, changeSelectedItem }) => {
  // states
  const [panelVisibility, setPanelVisibility] = useState(false);
  const [menuItems, setMenuItems] = useState(accordionData);
  const [activeItem, setActiveItem] = useState('Filter');

  // accordion menu item builder
  useEffect(() => {
    let data = JSON.parse(JSON.stringify(accordionData));
    accordionData.every((item) => {
      if (item.active) {
        setActiveItem(item.name);
        return false;
      } else {
        setActiveItem('Filter');
        return true;
      }
    });
    setMenuItems(data);
  }, [accordionData]);

  return (
    <div
      className="accordion hide-in-tablet"
      onClick={() => setPanelVisibility((prevValue) => !prevValue)}>
      <header className="accordion__header">
        <h2>{activeItem}</h2>
        <IoIosArrowDown
          className={
            panelVisibility ? 'accordion__header__icon rotate-icon' : 'accordion__header__icon'
          }
        />
      </header>
      <main className={panelVisibility ? 'accordion__body visible' : 'accordion__body'}>
        {menuItems?.map(({ id, name, active }) => (
          <p
            key={id}
            className={active ? '.acive' : ''}
            onClick={() => changeSelectedItem(id, name)}>
            {name}
          </p>
        ))}
      </main>
    </div>
  );
};

Accordion.propTypes = {
  accordionData: PropTypes.array,
  changeSelectedItem: PropTypes.func
};

export default Accordion;
