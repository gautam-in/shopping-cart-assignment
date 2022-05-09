import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  border-radius: 2px;
  border: 1px solid #bf2957;
  background-color: #bf2957;
  color: #ffffff;
  line-height: 35px;
  padding: ${(props) => (props.padding ? props.padding : `0 16px`)};
  margin: ${(props) => (props.margin ? props.margin : `none`)};
  font-size: 16px;
  font-weight: 400;
  font-family: "Dosis", sans-serif;

  &:hover {
    background-color: #ffffff;
    color: #bf2957;
    transition: 0.2s ease;
  }

  &:focus {
    outline: 0;
  }

  &:disabled {
    opacity: 0.6;
    background-color: #bf2957;
    color: #ffffff;
    cursor: not-allowed;
  }
`;
const ButtonComponent = ({
  children = "Styled Button",
  disabled,
  ...props
}) => {
  return (
    <div>
      <Button disabled={disabled} {...props}>
        {children}
      </Button>
    </div>
  );
};

export default ButtonComponent;
