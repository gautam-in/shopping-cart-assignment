import styled from "styled-components";

const H6 = styled.h6`
  font-size: 1em;
  line-height: 1.5em;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : `black`)};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : `none`)};
`;

export default H6;
