import styled from "styled-components";

const HeroContainer = styled.div`
  width: 95%;
  margin: 2rem auto;
  box-shadow: rgb(0 0 0 / 50%) 0px 5px 10px -10px;

  @media only screen and (max-width: 769px) {
    & {
      margin: auto;
      overflow-x: hidden;
      min-height: 25vh;
    }
  }
`;

const HeroSection = styled.section`
  padding: 2rem;
  margin: 0 auto;
`;

const HeroImage = styled.img`
  width: 100%;
  max-width: 100%;
`;

export { HeroContainer, HeroSection, HeroImage };
