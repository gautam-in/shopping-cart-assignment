import React from 'react';
import PropTypes from 'prop-types';
import StyledP from './style';

const TextP = ({children}) => {
  return (
    <StyledP>
      {children}
    </StyledP>
  );
};
/*
TextP.propTypes = {
  customText: PropTypes.string.isRequired,
  cname: PropTypes.string.isRequired,
};*/
export default TextP;