import React from 'react';
import './ContentSection.scss';

const ContentSection = ({ category }) => (
  <>
    <section className="content-section">
      <div className="content-section__preview">
        <img className="content-section__preview--image" src={category.imageUrl} alt={category.name} />
      </div>
      <div className="content-section__details">
        <h1>{category.name}</h1>
        <p>{category.description}</p>
        <a className="btn" href="/">
          {`Explore ${category.key}`}
        </a>
      </div>
    </section>
    <hr />
  </>
);

export default ContentSection;
