import styled from "styled-components";

const p = styled.p`
  font-size: 1em;
  line-height: 1.5em;
  font-weight: ${(props) => (props.bold ? props.bold ? props.bold : 'bold' : "none")};
  color: ${(props) => (props.color ? props.color : ``)};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : `none`)};
  margin: ${(props) => (props.margin ? props.margin : `none`)};

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

export default p;
