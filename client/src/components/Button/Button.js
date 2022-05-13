import styled from "styled-components";
import PropTypes from 'prop-types';
import { COLORS } from '../../constants';

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  border-radius: 2px;
  border: ${`1px solid ${COLORS.PINK}`};
  background-color: ${COLORS.PINK};
  color: #ffffff;
  line-height: 35px;
  padding: ${(props) => (props.padding ? props.padding : `0 16px`)};
  margin: ${(props) => (props.margin ? props.margin : `none`)};
  font-size: 16px;
  font-weight: 400;
  font-family: "Dosis", sans-serif;

  &:hover {
    background-color: #ffffff;
    color: ${COLORS.PINK};
    transition: 0.2s ease;
  }

  &:focus {
    outline: 0;
  }

  &:disabled {
    opacity: 0.6;
    background-color:${COLORS.PINK};
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

ButtonComponent.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.func
  ])
}

ButtonComponent.defaultProps = {
  disabled: false,
  children: "Styled Button"
}

export default ButtonComponent;
