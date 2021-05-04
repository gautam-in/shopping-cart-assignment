import React from 'react';

import './Input.scss';

const Input = React.forwardRef((props, ref) => {
  return (
    <div className='input-field'>
      <input ref={ref} {...props} />
      <label htmlFor={props.id}>{props.placeholder}</label>
    </div>
  );
});

export default Input;
