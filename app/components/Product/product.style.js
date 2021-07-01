import styled from 'styled-components';

export const ProductStyles = styled.div`
  width: var(--productTileDesktopWidth);
  border-bottom: 1px dotted var(--grey);
  background-color: var(--white);
  margin: 0.5rem 0.5rem 1rem;
  padding: 0.25rem;
  --max-lines: 4;
  @media only screen and (max-width: 1023px) {
    width: var(--productTileTabletWidth);
  }

  @media only screen and (max-width: 767px) {
    width: 100%;
  }
`;

export const ProductHeader = styled.header`
 height: 70px;
 @media only screen and (max-width: 1023px){
   height: 50px;
 }
`;
export const ProductContent = styled.div`
    display: grid;
    grid-template-rows: 1fr;
    @media only screen and (max-width: 1023px) {
      grid-template-columns: 50%;
      grid-template-rows: 2fr 1fr;
    }
    @media only screen and (max-width: 767px) {
      grid-template-columns: 40% 60%;
      grid-template-rows: 1fr;
    }
`;
export const ImageContainer = styled.div`
  width:  var(--productTileDesktopWidth);
  img{
    width: 100%;
  }
  @media only screen and (max-width: 1023px){
  width: auto;
  }
    @media only screen and (max-width: 767px) {
      grid-row-start: 1;
      grid-row-end: 2;
    }
`;
export const ProductDesc = styled.div`
     background-color: var(--lightestgrey);
    font-size: 0.8rem;
    font-weight: 600;
    margin: 1rem 0;
    min-height: calc(1.2rem * var(--max-lines));
    max-height: calc(1.2rem * var(--max-lines));
    overflow: hidden;
    padding: 1%;
    p {
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }
`;
export const ProductFooter = styled.footer`
   display: flex;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 1023px) {
      grid-column-start: 1;
      grid-column-end: 3;
      align-self: flex-end;
      button{
        width: 100%;
      }
    }
    @media only screen and (max-width: 767px) {
      grid-column-start: 2;
      align-items: flex-start;
    }
`;

export const ProductPrice = styled.div`
  @media only screen and (max-width: 1023px) {
      display: none;
  }
`;