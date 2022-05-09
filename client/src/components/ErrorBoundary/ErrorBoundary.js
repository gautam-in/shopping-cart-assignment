import React from "react";
import Styled from "styled-components";
import Button from "../Button/Button";
import H1 from "../Typography/H1";
import H3 from "../Typography/H3";

const ErrorBoundaryContainer = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column ;
    text-align: center;
    margin: 100px 0px;

    & h1,h3,h4 {
        padding: 10px 0px;
    }

    & a {
        color: #547aef;
        cursor: pointer;
    }
`;

function ErrorBoundary() {
  const onClick = () => {
    if (typeof window !== undefined) {
      window.location.reload();
    }
  };
  return (
    <div>
      <ErrorBoundaryContainer>
        <H1 fontSize="3em">Something went wrong</H1>
        <H3>Please close the browser and try again</H3>
        <Button margin="16px 0px" onClick={onClick}>
          {" "}
          RETRY{" "}
        </Button>
      </ErrorBoundaryContainer>
    </div>
  );
}

export default ErrorBoundary;
