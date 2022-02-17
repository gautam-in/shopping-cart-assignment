import styled from "styled-components";

export const CardContainer = styled.div`
  .desktop-show {
    display: none;
  }
  @media screen and (min-width: 720px) {
    display: flex;
    flex: 0 0 48%;
    flex-direction: column;
    .desktop-show {
      display: flex;
    }
  }
  @media screen and (min-width: 1024px) {
    .desktop-show {
      display: none;
    }
    flex: 0 0 23%;
  }
`;
export const Title = styled.h3`
  margin-bottom: 1rem;
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-evenly;
  height: 200px;
`;
export const Image = styled.img`
  max-width: 100%;
  object-fit: cover;
`;
export const Price = styled.span`
  display: none;
  @media screen and (min-width: 1024px) {
  }
`;
export const ImageWrapper = styled.div`
  display: block;
  margin: 10px;
  flex: 0 0 50%;
  @media screen and (min-width: 720px) {
  }
`;
export const PriceWrapper = styled.div`
  display: none;
  @media screen and (min-width: 720px) {
    display: block;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  /* @media screen and (min-width: 720px) {
    flex-direction: row;
  } */
  @media screen and (min-width: 1024px) {
    flex-direction: column;
  }
`;
export const Description = styled.p`
  color: var(--color-dark);
  font-size: 1rem;
  font-weight: 400;
  padding: 0.4rem 0.6rem;
  background: var(--color-light);
  flex: 1 0 auto;
`;
