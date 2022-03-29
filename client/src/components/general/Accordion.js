// react
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// components
import { IoIosArrowDown } from 'react-icons/io';

/**
 * @name Accordion
 * @param {accordianData} param0
 * @param {changeSelectedItem} param1
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
    let index = 0;
    accordionData.forEach((item, i) => {
      if (item.active) {
        setActiveItem(item.name);
        index = i;
      }
    });
    data.splice(index, 1);
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
