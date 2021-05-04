import React from 'react';

import './Input.scss';

const Input = (props) => {
  return (
    <div className='input-field'>
      <input id={props.id} {...props} />
      <label htmlFor={props.id}>{props.placeholder}</label>
    </div>
  );
};

export default Input;
