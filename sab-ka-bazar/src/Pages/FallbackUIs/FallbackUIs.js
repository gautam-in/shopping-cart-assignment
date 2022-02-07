import styled from "styled-components";
import {
  Container,
  Wrapper,
} from "../../Components/Containers/ContainerElements";
import { HeadingSecondary } from "../../Components/Typography/Typography";

const ContentContainer = styled.main`
  background-color: #e5e5e5;
  height: 80vh;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FallBackUI = ({ title }) => {
  return (
    <Container>
      <Wrapper>
        <ContentContainer>
          <HeadingSecondary>{title}</HeadingSecondary>
        </ContentContainer>
      </Wrapper>
    </Container>
  );
};
