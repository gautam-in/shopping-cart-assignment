import styled from "styled-components";
const HomeStyles = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`;

const Banner = styled.section`
  margin: 0.5rem 0;
  box-shadow: 5px 5px 15px gray;
  figure {
    display: flex;
    align-items: center;
    flex-direction: ${(props) => props.rowalign};
    justify-content: space-between;

    picture img {
      min-height: 250px;
      max-height: 300px;
      height: 100%;
      width: 100%;
    }
    figcaption {
      width: 50%;
      text-align: center;
      button {
        padding: 1rem;
        border: 0;
        background-color: var(--button-color);
        color: var(--white);
      }
    }
  }
  @media (max-width: 480px) {
    margin: 0.1rem 0;
    padding: 1rem;
    figure {
      margin: 0.1rem;
      div {
        width: 40%;
      }
      picture img {
        height: 100%;
        min-height: 140px;
        max-height: 200px;
        width: 100%;
      }
      figcaption {
        width: 60%;
        button {
          padding: 0.5rem;
        }
      }
    }
  }
`;

export { HomeStyles, Banner };
