import styled from "styled-components";

const H3 = styled.h3`
  font-size: 1.25em;
  line-height: 1.2em;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : `black`)};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : `none`)};
`;

export default H3;
