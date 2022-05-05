import styled from "styled-components";

const H2 = styled.h2`
  font-size: 1.375em;
  line-height: 1.0909em;
  font-weight: bold;
  text-align: ${(props) => (props.alignCenter ? "center" : `none`)};
  color: ${(props) => (props.color ? props.color : `black`)};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : `none`)};
`;

export default H2;
