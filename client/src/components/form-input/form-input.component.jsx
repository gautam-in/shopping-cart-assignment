import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="group">
      <label htmlFor={label}>{label}</label>
      <input className="form-input" onChange={handleChange} {...otherProps} />
      {/* <label className={`form-input-label`}>{label}</label> */}
    </div>
  );
};
export default FormInput;
