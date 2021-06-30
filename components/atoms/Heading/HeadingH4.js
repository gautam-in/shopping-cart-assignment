import React from 'react';
import PropTypes from 'prop-types';

const HeadingH4 = (props) => {
  const { customText, cname,children } = props;
  return (
    <>
      <h4 className={`${cname}`}>{children}</h4>
    </>
  );
};

// HeadingH4.propTypes = {
//   customText: PropTypes.string.isRequired,
//   cname: PropTypes.string,
// };

// HeadingH4.defaultProps = {
//   cname: 'main-heading',
// };

export default HeadingH4