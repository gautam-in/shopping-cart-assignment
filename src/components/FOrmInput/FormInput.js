import React from 'react';

import './formInput.styles.scss';
class FormInput extends React.Component{
  
    render(){
        const {handleChange , label , ...otherProps} = this.props;
        return(
            <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherProps} />
            {label ? (
              <label
                className={`${
                  otherProps.value.length ? 'shrink' : ''
                } form-input-label`}
              >
                {label}
              </label>
            ) : null}
          </div>
        )
    }
}

export default FormInput;