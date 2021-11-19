import styled from 'styled-components';

const ContainerStyles = styled.div`
padding: 20px;
max-width: 1300px;
width: 100%;
margin: 0 auto;
`;

export default function Container({ children }) {
  return (
    <ContainerStyles>
      {children}
    </ContainerStyles>
  );
}