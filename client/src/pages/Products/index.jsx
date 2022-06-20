import React from 'react'
import FilterMenu from '../../components/FilterMenu';
import ProductListing from '../../components/ProductListing';
import Wrapper from '../../components/Utilities/Wrapper';
import { StyledProducts } from './Products.styled';

const Products = () => {
  return (
    <StyledProducts>
      <Wrapper>
      <aside className="filter-products">
        <FilterMenu/>
      </aside>
      <div className="product-listing">
        <ProductListing/>
      </div>
      </Wrapper>
    </StyledProducts>
  )
}

export default Products;