import styled from "styled-components";

export const CardContentContainer = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
  }
`;
export const CardDescription = styled.p`
  color: var(--color-dark);
  font-size: 1rem;
  font-weight: 400;
  padding: 0.4rem 0.6rem;
  background: var(--color-light);
  flex: 1 0 auto;
`;
export const CardFooter = styled.div`
  .desktop-visible {
    display: none;
  }
  @media screen and (min-width: 720px) {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    justify-content: space-between;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 1.2rem 0 0.8rem 0.6rem;
    .mobile-show {
      display: none;
    }
    .desktop-visible {
      display: block;
    }
  }
`;
export const Price = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;
export const PriceWrapper = styled.p`
  display: none;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    align-self: center;
  }
`;
