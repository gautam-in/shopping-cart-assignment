import React from 'react';
import PropTypes from 'prop-types';
import StyledP from './style';

const TextP = (props) => {
  return (
    <StyledP {...props}>
      {props.children}
    </StyledP>
  );
};

export default TextP;