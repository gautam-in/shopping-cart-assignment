import styled from 'styled-components';

const ProductsContainerStyles = styled.div`
  margin-left: ${props => props.theme.sideNavWidth}px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media only screen and (max-width: 767px) {
    margin: 0;
  }
`;

export default ProductsContainerStyles;
