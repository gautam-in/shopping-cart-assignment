import styled from "styled-components";

const H4 = styled.h4`
  font-size: 1.125em;
  line-height: 1.333em;
  font-weight: bold;
  color: ${(props) => (props.color ? props.color : `black`)};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : `none`)};
`;

export default H4;
