import React from 'react';
import styled from 'styled-components';
import { isMobileOnly } from 'react-device-detect';

import Filters from '../../components/Filters/Filters';
import Products from '../../components/Products/Products';

const ProductsWrapper = styled.div`
  display:flex;
  flex-direction: row;
`;

const ProductsPage = () => {
  return (
    <ProductsWrapper>
      {!isMobileOnly && <Filters />}
      <Products />
    </ProductsWrapper>
  );
}

export default ProductsPage;