import React from 'react';
import PropTypes from 'prop-types';

const HeadingH1 = (props) => {
  const { customText, cname ,children} = props;
  return (
    <>
      <h1 className={`${cname}`}>{children}</h1>
    </>
  );
};

/*HeadingH1.propTypes = {
  customText: PropTypes.string.isRequired,
  cname: PropTypes.string,
};

/*HeadingH1.defaultProps = {
  cname: 'main-heading',
};*/

export default HeadingH1