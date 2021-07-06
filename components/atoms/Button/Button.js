import React from 'react';
import PropTypes from 'prop-types';
import {ButtonStyle} from './style' 

const Button= (props) => {
  
  const { children,type, cname } = props;
  
  return (
        <ButtonStyle className={cname} type={type}>
          <button class={cname}>{children}</button>
        </ButtonStyle>
  )

}

/*Button.propTypes = {
  content: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  cname: PropTypes.string.isRequired,
};*/

export default Button;