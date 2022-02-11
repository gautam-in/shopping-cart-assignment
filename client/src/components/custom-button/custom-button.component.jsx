import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ children, ...buttonProps }) => {
  return (
    <button className="custom-button" {...buttonProps}>
      {children}
    </button>
  );
};

export default CustomButton;
