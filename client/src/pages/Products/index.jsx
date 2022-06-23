import FilterMenu from '../../components/FilterMenu';
import ProductListing from '../../components/ProductListing';
import React from 'react';
import { StyledProducts } from './Products.styled';
import Wrapper from '../../components/Utilities/Wrapper';
import { useParams } from 'react-router-dom';
import ErrorBoundary from '../../components/Utilities/ErrorBoundary';

const Products = () => {

  const categoryId = useParams().id;

  return (
    <StyledProducts>
      <Wrapper>
        <aside className="filter-products">
          <ErrorBoundary>
            <FilterMenu categoryId={categoryId} />
          </ErrorBoundary>
        </aside>
        <div className="product-listing">
          <ErrorBoundary>
            <ProductListing categoryId={categoryId} />
          </ErrorBoundary>
        </div>
      </Wrapper>
    </StyledProducts>
  );
};

export default Products;
