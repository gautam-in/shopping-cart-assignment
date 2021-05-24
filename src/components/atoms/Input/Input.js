import React from 'react';

import './Input.scss';

const Input = ({ errorLabel, ...props }) => {
  return (
    <section className='input-field'>
      <input {...props} />
      <label htmlFor={props.id}>{props.placeholder}</label>
      <span className='form-error'>{errorLabel}</span>
    </section>
  );
};

export default Input;
