import styled from "styled-components";

const H5 = styled.h5`
  font-size: 1em;
  line-height: 1.5em;
  font-weight: ${(props) => (props.bold ? props.bold : 'none')};
  color: ${(props) => (props.color ? props.color : `black`)};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : `none`)};
  margin: ${(props) => (props.margin ? props.margin : 'none')};
`;

export default H5;
