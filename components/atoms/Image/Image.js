import React from 'react';
import PropTypes from 'prop-types';
 
const Image = (props) => {
  const {
    source,
    alt,
    classname,
  } = props;
  const ImageJsx = (
    <picture>
      <img className={classname} src={source} alt={alt} />
    </picture>
  );
 
  return (
    <>
      {ImageJsx}
    </>
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