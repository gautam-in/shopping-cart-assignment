import styled from "styled-components";

const HeroContainer = styled.div`
  width: 90%;
  margin: 2rem auto;
  box-shadow: 0 0 5px 5px #ccc;
  & button {
    background: #ccc;
  }
  & button:hover {
    background: #c4c2c3;
  }
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
