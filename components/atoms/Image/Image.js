import React from 'react';
import PropTypes from 'prop-types';
import StyledImage from './style'
  
const Image = (props) => {
    const {
      src,
      alt,
      classname,
    } = props;
  
  return (
    <StyledImage> <img src={src}  alt={alt} className={classname}/> </StyledImage>
  );
  
};
 
// props validation
Image.propTypes = {
  source: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  classname: PropTypes.string,
};
// default props
Image.defaultProps = {
  classname: '',
};
 
export default Image;