import React from 'react';
import PropTypes from 'prop-types';

const HeadingH3 = (props) => {
  const { customText, cname,children } = props;
  return (
    <>
      <h3 className={`${cname}`}>{children}</h3>
    </>
  );
};

/** HeadingH3.propTypes = {
  customText: PropTypes.string.isRequired,
  cname: PropTypes.string,
};

HeadingH3.defaultProps = {
  cname: 'main-heading',
}; */

export default HeadingH3