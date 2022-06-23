import React from 'react';
import { StyledExploreCategories } from './Explore.styled';
import Wrapper from '../Utilities/Wrapper';
import { Link } from 'react-router-dom';

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

  const exploreBtnHandler = (e) => {
    console.log(e);
  }

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
          <Link onClick={exploreBtnHandler} to={`/product/${categoryId}`}>{categoryCTA}</Link>
        </div>
      </Wrapper>
    </StyledExploreCategories >
  );
};

export default Explore;
