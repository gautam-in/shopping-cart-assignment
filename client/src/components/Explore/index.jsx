import { Link } from 'react-router-dom';
import React from 'react';
import { StyledExploreCategories } from './Explore.styled';
import Wrapper from '../Utilities/Wrapper';

const Explore = ({
  exploreCategoryClass,
  categorySrc,
  categoryTitle,
  categoryInfo,
  categoryCTA,
  categoryId,
  categoryOrder,
  isEnabled,
}) => {

  if (!isEnabled === true) return null;
  return (
    <StyledExploreCategories
      id={categoryId}
      order={categoryOrder}
      className={`explore-categories ${exploreCategoryClass}`}
    >
      <Wrapper>
        <figure>
          <img src={categorySrc} alt={`some ${categoryTitle} visuals`} />
        </figure>
        <div className="explore-details">
          <h2>{categoryTitle}</h2>
          <p>{categoryInfo}</p>
          <Link to={`/product/${categoryId}`} title={categoryCTA} >{categoryCTA}</Link>
        </div>
      </Wrapper>
    </StyledExploreCategories >
  );
};

export default Explore;
