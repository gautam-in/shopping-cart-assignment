import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ name, alt }) => {
  return (
    <img
      loading='lazy'
      src={require(`../../../../static/images/${name}`).default}
      alt={alt}
      width='100%'
      height='100%'
    />
  );
};

Image.propTypes = {
  name: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};
export default Image;
