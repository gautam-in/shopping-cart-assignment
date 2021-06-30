import React from 'react';
import PropTypes from 'prop-types';

const HeadingH2 = (props) => {
  const { customText, cname } = props;
  return (
    <>
      <h1 className={`${cname}`}>{customText}</h1>
    </>
  );
};

HeadingH2.propTypes = {
  customText: PropTypes.string.isRequired,
  cname: PropTypes.string,
};

HeadingH2.defaultProps = {
  cname: 'main-heading',
};

export default HeadingH2