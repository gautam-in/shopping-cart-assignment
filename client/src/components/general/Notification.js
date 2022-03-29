// react
import React from 'react';
import PropTypes from 'prop-types';

// components
import { BiErrorCircle } from 'react-icons/bi';
import { TiTickOutline } from 'react-icons/ti';

const Notification = ({ msg, type }) => {
  return (
    <section className="notification">
      <p className={type === 'error' ? 'error' : 'success'}>
        {type === 'error' ? (
          <BiErrorCircle className="notification__icon" />
        ) : (
          <TiTickOutline className="notification__icon" />
        )}
        {msg}
      </p>
    </section>
  );
};

Notification.propTypes = {
  msg: PropTypes.string,
  type: PropTypes.string
};

export default Notification;
