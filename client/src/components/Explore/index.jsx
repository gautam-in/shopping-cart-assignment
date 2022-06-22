import Button from '../Utilities/Button';
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
          <img src={categorySrc} alt={categoryTitle} />
        </figure>
        <div className="explore-details">
          <h3>{categoryTitle}</h3>
          <p>{categoryInfo}</p>
          <Button>{categoryCTA}</Button>
        </div>
      </Wrapper>
    </StyledExploreCategories>
  );
};

export default Explore;
