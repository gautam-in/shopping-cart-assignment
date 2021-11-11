import styled from "styled-components";

export const CategoryArticle = styled.article`
  margin: 50px auto;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  &::before {
    content: "";
    width: 80%;
    height: 20%;
    left: 10%;
    border-radius: 100px / 10px;
    position: absolute;
    top: 80%;
    z-index: -1;
    box-shadow: 0px 0px 10px var(--darkGray);
  }

  & > div {
    display: flex;
    padding: 10px;
    align-items: center;
    justify-content: start;
    text-align: center;
    background-color: white;
    width: 100%;
    img {
      flex: 25%;
      min-width: 130px;
    }

    .categoryDescription {
      flex: 60%;
    }

    p {
      margin-bottom: 10px;
      font-size: 0.8rem;
    }

    h3 {
      padding: 10px 0;
    }

    a {
      font-size: 0.8rem;
      margin: 10px auto;
      padding: 10px;
      background-color: var(--brickRed);
      outline: none;
      border: none;
      font-weight: bold;
      color: var(--white);
      border-radius: 3px;
      display: inline-block;
    }

    @media (min-width: 461px) {
      p,
      a {
        font-size: 1rem;
      }
    }
  }
`;
