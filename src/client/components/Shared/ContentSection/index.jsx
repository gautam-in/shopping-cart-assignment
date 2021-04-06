import React from 'react';
import { Link } from 'react-router-dom';
import withStyles from 'isomorphic-style-loader/withStyles';

import WEB_PATH from '../../../constants/webPath';
import styles from './ContentSection.scss';

const ContentSection = ({ category }) => (
  <>
    <section className="content-section">
      <div className="content-section__preview">
        <img className="content-section__preview--image" src={category.imageUrl} alt={category.name} />
      </div>
      <div className="content-section__details">
        <h1>{category.name}</h1>
        <p>{category.description}</p>
        <Link className="btn" to={{ pathname: WEB_PATH.PRODUCTS, search: `?q=${category.id}` }}>
          {`Explore ${category.key}`}
        </Link>
      </div>
    </section>
    <hr />
  </>
);

export default withStyles(styles)(ContentSection);
