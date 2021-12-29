import React from 'react';
import styled from 'styled-components';
import { isMobileOnly } from 'react-device-detect';
import { useParams } from 'react-router-dom';

import Filters from '../../components/Filters/Filters';
import Dropdown from '../../components/Dropdown/Dropdown';
import Products from '../../components/Products/Products';

const ProductsWrapper = styled.div`
  display:flex;
  flex-direction: row;

  // Large screen mobiles
  @media only screen 
  and (min-width : 321px) 
  and (max-width : 480px) {
    flex-direction: column;
    margin-top: 15px;
  }
`;

const ProductsPage = () => {
  const { filterId } = useParams();
  return (
    <ProductsWrapper>
      {!isMobileOnly && <Filters filterId={filterId} />}
      {isMobileOnly && <Dropdown filterId={filterId} />}
      <Products filterId={filterId} />
    </ProductsWrapper>
  );
}

export default ProductsPage;