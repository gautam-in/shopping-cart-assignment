import { Fragment } from "react";
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet-async";

const SEO = ({title,content,link}) => {
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
        <meta
          name="description"
          content={content}
        />
        <link rel="canonical" href={link} />
      </Helmet>
    </Fragment>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  link: PropTypes.string,
}

SEO.defaultProps = {
  title: 'SEO Title',
  content: 'SEO Content',
  link: 'SEO Link',
}


export default SEO;
