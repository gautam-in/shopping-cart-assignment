import React from "react";
import styled from "styled-components";

const LoaderText = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  color: #202121;
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const Loader = ({ name }) => {
  return (
    <LoaderContainer>
      <LoaderText>Loading {name}....</LoaderText>
    </LoaderContainer>
  );
};

export default Loader;
