import styled from "styled-components";

const ProductCard = styled.div`
  min-height: 30rem;
  max-height: fit-content;
  width: auto;
  min-width: 25rem;
  max-width: 30rem;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: 3px dotted #e5e5e5;

  @media only screen and (max-width: 599px) {
    & {
      max-width: max-content;
      justify-content: space-evenly;
    }
  }
`;

const ProductContainer = styled.main`
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: max-content;
  /* grid-gap: 1.5rem; */

  width: 100%;
  min-height: 100%;
  background-color: #e5e5e5;

  @media only screen and (max-width: 1300px) {
    & {
      grid-template-columns: 1fr;
      align-items: center;

      width: 95%;
      margin: 0 auto;
    }
  }
`;

const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  grid-gap: 1rem;
  background-color: #fff;

  width: 100%;
  padding: 1rem;
`;

const ProductImage = styled.img`
  width: 15rem;
`;

const ProductDescription = styled.div`
  background-color: #e5e5e5;
  font-size: 1.4rem;
  color: inherit;
  padding: 1rem;
  margin: 1rem 0;
`;

const FlexItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media only screen and (max-width: 599px) {
    flex-direction: row;
  }

  @media only screen and (max-width: 399px) {
    flex-direction: column;
  }
`;

const FlexColumnItems = styled(FlexItems)`
  flex-direction: row;
  justify-content: space-evenly;
`;

const ProductDescriptionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;

  @media only screen and (max-width: 599px) {
  }
`;

export {
  ProductCard,
  ProductContainer,
  ProductsContainer,
  ProductImage,
  FlexItems,
  ProductDescription,
  ProductDescriptionContainer,
  FlexColumnItems,
};
