import { Fragment } from "react";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet-async";

const SEO = ({title,content}) => {
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={content}
        />
      </Helmet>
    </Fragment>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
}

SEO.defaultProps = {
  title: 'SEO Title',
  content: 'SEO Content',
}


export default SEO;
