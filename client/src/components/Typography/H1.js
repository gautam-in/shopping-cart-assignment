import styled from "styled-components";

const H1 = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : '1.5em')};
  line-height: 1em;
  font-weight: ${(props) => (props.bold ? props.bold : 'bold')};
  color: ${(props) => (props.color ? props.color : `black`)};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : `none`)};
`;

export default H1;
