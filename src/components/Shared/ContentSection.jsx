import React from 'react';
import './ContentSection.scss';

import { category } from '../../constants/images';

const ContentSection = () => {

  return (
    <>
      <section className="content-section">
        <div className="content-section__preview">
          <img className="content-section__preview--image" src={category.fruitsImage} alt="image of a baby" />
        </div>
        <div className="content-section__details">
          <h3>Fruits &amp; Vegitables</h3>
          <p>A variety of fresh fruits and vegetables</p>
          <a className="btn" href="#">Explore dsfds</a>
        </div>
      </section>
      {/* <hr /> */}
    </>
  );

};

export default ContentSection;
