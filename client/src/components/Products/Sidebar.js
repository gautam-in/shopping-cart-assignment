// react
import React from 'react';
import PropTypes from 'prop-types';

/**
 * @name Sidebar
 * @param {menuItems} param0
 * @param {changeSelectedItems} param1
 * @returns Sidebar JSX for Product Page
 */
const Sidebar = ({ menuItems, changeSelectedItem }) => {
  return (
    <div className="sidebar">
      {menuItems?.map(({ id, active, name }) => (
        <p
          key={id}
          className={active ? 'sidebar__item active' : 'sidebar__item'}
          onClick={() => changeSelectedItem(id, name)}>
          {name}
        </p>
      ))}
    </div>
  );
};

Sidebar.propTypes = {
  menuItems: PropTypes.array,
  changeSelectedItem: PropTypes.func
};

export default Sidebar;
