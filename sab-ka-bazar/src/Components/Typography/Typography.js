import styled from "styled-components";

const HeadingPrimary = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: inherit;

  @media only screen and (max-width: 650px) {
    & {
      font-size: 1.8rem;
      margin: 2rem 0;
    }
  }

  @media only screen and (max-width: 499px) {
    & {
      font-size: 1.6rem;
      margin: 0.5rem 0;
    }
  }
`;

const HeadingSecondary = styled.h3`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1.8rem")};
  font-weight: 700;

  @media only screen and (max-width: 650px) {
    & {
      font-size: 1.6rem;
    }
  }

  @media only screen and (max-width: 499px) {
    & {
      font-size: 1.4rem;
    }
  }

  @media only screen and (max-width: 380px) {
    & {
      font-size: 1.2rem;
    }
  }
`;

const SubHeading = styled(HeadingSecondary)`
  font-weight: 400;
  font-size: 1.6rem;
  margin: ${(props) => (props.customMargin ? props.customMargin : "")};

  @media only screen and (max-width: 599px) {
    & {
      margin: 1rem 0;
      font-size: 1.4rem;
    }
  }
`;

export { HeadingPrimary, HeadingSecondary, SubHeading };
