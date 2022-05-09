import { Fragment } from "react";
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

export default SEO;
