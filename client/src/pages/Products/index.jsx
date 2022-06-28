import Dropdown from '../../components/Utilities/Dropdown';
import ErrorBoundary from '../../components/Utilities/ErrorBoundary';
import FilterMenu from '../../components/FilterMenu';
import ProductListing from '../../components/ProductListing';
import React from 'react';
import { StyledProducts } from './Products.styled';
import Wrapper from '../../components/Utilities/Wrapper';
import { getNumericalWidth } from '../../services/getFormattedDataServices';
import theme from '../../theme';
import { useParams } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';

const Products = () => {

  const categoryId = useParams().id;
  const {width} = useWindowDimensions();

  return (
    <StyledProducts>
      <Wrapper>
        {
          (width > getNumericalWidth(theme.breakpoints.SM_TAB)) ? 
          (
            <aside className="filter-products">
              <ErrorBoundary>
                <FilterMenu categoryId={categoryId} />
              </ErrorBoundary>
            </aside>
          ) : (
            <Dropdown categoryId={categoryId}/>
          )
        }
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
