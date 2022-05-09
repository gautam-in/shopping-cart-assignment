import Styled from "styled-components";

const LoaderContainer = Styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = Styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #bf2957;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 1s linear infinite;

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

`;

const Spinner = () => (
  <LoaderContainer>
    <Loader></Loader>
  </LoaderContainer>
);

export default Spinner;
