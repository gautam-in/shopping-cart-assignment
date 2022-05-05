import styled from "styled-components";

const HelpText = styled.p`
  font-size: ${(props) => (props.fontSize ? "props.fontSize" : "0.8em")};
  line-height: 1.5em;
  font-weight: ${(props) => (props.bold ? "bold" : "none")};
  color: ${(props) => (props.color ? props.color : `black`)};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : `none`)};
  padding-top: ${(props) => (props.paddingTop ? props.paddingTop : `none`)};

  @media (max-width: 480px) {
    font-size: 0.8em;
  }
`;

export default HelpText;
