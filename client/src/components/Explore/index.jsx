import React from 'react'
import Wrapper from '../Utilities/Wrapper';
import { StyledExploreCategories } from './Explore.styled';
import Button from '../Utilities/Button';

const Explore = ({exploreCategoryClass,categorySrc,categoryTitle,categoryInfo,categoryCTA}) => {
  return (
    <StyledExploreCategories className={`explore-categories ${exploreCategoryClass}`}>
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
  )
}

export default Explore;