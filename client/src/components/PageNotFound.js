import styled from "styled-components";
const PageNotFoundStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
  margin-top: 70px;
`;
export default function PageNotFound() {
  return (
    <PageNotFoundStyles>
      <h1> 404 - Page Not Found</h1>
    </PageNotFoundStyles>
  );
}
