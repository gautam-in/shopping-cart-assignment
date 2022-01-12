import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;

  /* background-color: purple; */
`;

const Container = styled.div`
  background-color: ${(props) => (props.bg ? props.bg : "")};
  width: 100%;
  margin: 0 auto;
  box-shadow: rgb(0 0 0 / 50%) 0px 5px 15px -15px;

  /* background-color: black; */
`;

export { Container, Wrapper };
