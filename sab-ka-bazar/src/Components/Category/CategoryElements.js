import styled from "styled-components";

const CategoryContainer = styled.section`
  min-height: 50vh;
  width: 90%;
  margin: 0 auto;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgb(0 0 0 / 50%) 0px 5px 10px -10px;

  &:nth-child(odd) > aside {
    order: 2;
  }

  @media only screen and (max-width: 768px) {
    & {
      flex-direction: column;
    }

    &:nth-child(odd) > aside {
      order: 0;
    }
  }
`;

const CategoryAsideOne = styled.aside`
  padding: 2.5rem;
  height: 30vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: 769px) {
    & {
      padding: 2rem;
      height: auto;
      justify-content: space-between;
    }
  }

  @media only screen and (max-width: 599px) {
    & {
      padding: 1.5rem;
    }
  }
`;

const CategoryImage = styled.img`
  width: 50rem;

  @media only screen and (max-width: 999px) {
    & {
      width: 35rem;
    }
  }

  @media only screen and (max-width: 650px) {
    & {
      width: 25rem;
    }
  }

  @media only screen and (max-width: 500px) {
    & {
      width: 15rem;
    }
  }
`;

export { CategoryContainer, CategoryAsideOne, CategoryImage };
